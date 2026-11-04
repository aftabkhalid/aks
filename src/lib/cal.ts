export const CAL_NAMESPACE = "30min";
export const CAL_LINK = "aftabkhalid/30min";

/** Public booking page — also acts as the no-JS fallback for the embed triggers. */
export const CAL_URL = `https://cal.com/${CAL_LINK}`;

export const CAL_CONFIG = {
  layout: "month_view",
  useSlotsViewOnSmallScreen: "true",
  theme: "auto",
} as const;
