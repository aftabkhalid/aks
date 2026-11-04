"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CAL_NAMESPACE } from "@/lib/cal";

/**
 * Loads the Cal.com embed once per page and registers the "30min" namespace.
 * Rendered from the root layout so every booking trigger on the site works.
 */
export default function CalInit() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return null;
}
