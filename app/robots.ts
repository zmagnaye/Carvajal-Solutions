import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://carvajalsolutions.com/sitemap.xml",
    host: "https://carvajalsolutions.com",
  };
}