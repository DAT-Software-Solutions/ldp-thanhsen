/** URL liên quan trang Liên hệ (embed, mailto). */

import { primaryEmail } from "@/lib/site-seo";

export const CONTACT_EMAIL = primaryEmail;
export const CONTACT_MAILTO_URL = `mailto:${CONTACT_EMAIL}`;

/** Embed OSM — có thể thay bằng Google Maps khi có URL chính thức. */
export const CONTACT_MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=106.622%2C10.758%2C106.648%2C10.778&layer=mapnik&marker=10.768%2C106.635";
