"use client";

import { getCalApi } from "@calcom/embed-react";
import { CAL_CONFIG, CAL_LINK, CAL_NAMESPACE, CAL_URL } from "@/lib/cal";

/**
 * Inline booking link. Opens the Cal.com modal programmatically — the
 * data-attribute handler does not intercept anchors reliably — while keeping a
 * real href so middle-click and JS-less visits still reach the booking page.
 */
export default function BookCallLink({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  async function openModal(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const cal = await getCalApi({ namespace: CAL_NAMESPACE });
    cal("modal", { calLink: CAL_LINK, config: CAL_CONFIG });
  }

  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={openModal}
    >
      {children}
    </a>
  );
}
