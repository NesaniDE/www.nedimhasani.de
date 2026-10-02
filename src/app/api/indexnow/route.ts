import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";

export const runtime = "nodejs";

const SITE_HOST = "www.nedimhasani.de";
const SITE_URL = `https://${SITE_HOST}`;
const INDEXNOW_KEY = "d2ef35e520984ac599b4a62b9262560d";
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

/**
 * How far back changes are submitted. The cron runs daily; a three-day window
 * submits every change on two runs, so one failed run loses nothing.
 */
const WINDOW_MS = 3 * 24 * 60 * 60 * 1000;

/**
 * Only pages whose sitemap lastmod falls within the window. Bing explicitly
 * asks for changed URLs only; resubmitting everything on every run looks like
 * spam to IndexNow. URLs come straight from sitemap(), so the two can't drift.
 */
function changedUrls(): string[] {
  const since = Date.now() - WINDOW_MS;
  return sitemap()
    .filter((e) => e.lastModified && new Date(e.lastModified).getTime() >= since)
    .map((e) => e.url);
}

async function submit() {
  const urlList = changedUrls();
  if (urlList.length === 0) {
    return { ok: true, submittedUrls: 0, urls: urlList };
  }

  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  return {
    ok: res.ok,
    status: res.status,
    statusText: res.statusText,
    submittedUrls: urlList.length,
    urls: urlList,
  };
}

/**
 * Vercel adds an `Authorization: Bearer <CRON_SECRET>` header to scheduled
 * cron invocations. If CRON_SECRET is configured we require it on GET so
 * only Vercel's scheduler (or an authorised manual call) can trigger a
 * submission. Without the secret, GET is left open for ad-hoc pings.
 */
function authorized(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true;
  return req.headers.get("authorization") === `Bearer ${secret}`;
}

export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(await submit());
}

// Manual trigger from a logged-in browser session or curl
export async function POST(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(await submit());
}
