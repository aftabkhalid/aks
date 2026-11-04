"use client";

import { useEffect, useRef } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CAL_CONFIG, CAL_LINK, CAL_NAMESPACE, CAL_URL } from "@/lib/cal";

/**
 * Renders a post body and upgrades any Markdown link pointing at the Cal.com
 * booking page into a modal trigger. Delegated from the container so posts only
 * need a normal Markdown link — no per-link markup or client components.
 */
export default function ArticleBookingLinks({
  html,
  className = "",
  style,
}: {
  html: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    async function handleClick(event: MouseEvent) {
      const anchor = (event.target as Element | null)?.closest?.("a");
      if (!anchor) return;
      if (!(anchor.getAttribute("href") || "").startsWith(CAL_URL)) return;

      event.preventDefault();

      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("modal", { calLink: CAL_LINK, config: CAL_CONFIG });
    }

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
