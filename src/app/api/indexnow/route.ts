import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SITE_HOST = "www.nedimhasani.de";
const SITE_URL = `https://${SITE_HOST}`;
const INDEXNOW_KEY = "d2ef35e520984ac599b4a62b9262560d";
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

// Every public URL that should be pushed to IndexNow on each run.
// Mirror this list with src/app/sitemap.ts.
const URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/imprint`,
  `${SITE_URL}/datenschutz`,
];

async function submit() {
  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: URLS,
    }),
  });

  return {
    ok: res.ok,
    status: res.status,
    statusText: res.statusText,
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
  const result = await submit();
  return NextResponse.json({ submittedUrls: URLS.length, ...result });
}

// Manual trigger from a logged-in browser session or curl
export async function POST(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const result = await submit();
  return NextResponse.json({ submittedUrls: URLS.length, ...result });
}
