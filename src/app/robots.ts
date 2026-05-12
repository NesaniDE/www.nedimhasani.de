import type { MetadataRoute } from "next";

const SITE_URL = "https://www.nedimhasani.de";

// Explicit allow-list for the main LLM / AI crawlers and search bots.
// Listing them by name prevents accidentally being filtered out by an
// over-eager bot manager and signals that AI indexing is welcome.
const AI_BOTS = [
  "GPTBot", // OpenAI training crawler
  "OAI-SearchBot", // ChatGPT Search index
  "ChatGPT-User", // ChatGPT browsing
  "ClaudeBot", // Anthropic crawler
  "Claude-Web", // Anthropic browsing
  "anthropic-ai", // Anthropic legacy UA
  "Google-Extended", // Google Gemini training
  "Googlebot", // Google search
  "Bingbot", // Bing search
  "DuckDuckBot", // DuckDuckGo
  "PerplexityBot", // Perplexity
  "PerplexityUser", // Perplexity browsing
  "YouBot", // You.com
  "Applebot", // Apple Spotlight / Siri
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl (used by many open LLMs)
  "FacebookBot", // Meta crawler
  "meta-externalagent", // Meta AI
  "Bytespider", // TikTok / ByteDance
  "Amazonbot", // Amazon / Alexa
  "cohere-ai", // Cohere
  "mistralai-User", // Mistral
];

// Private routes that must never appear in search engines or LLM training
// corpora. Strict disallow for every user agent.
const PRIVATE_PATHS = ["/bachelorarbeit", "/bachelorarbeit/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: PRIVATE_PATHS,
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", ...PRIVATE_PATHS],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
