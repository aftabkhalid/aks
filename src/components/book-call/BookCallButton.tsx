"use client";

import MagneticButton from "@/components/magnetic-button/MagneticButton";
import { CAL_CONFIG, CAL_LINK, CAL_NAMESPACE } from "@/lib/cal";

/**
 * Booking trigger for the Cal.com embed. Keeps the magnetic button styling
 * while opening the scheduler modal instead of navigating away.
 */
export default function BookCallButton({
  children,
  className = "",
  reveal = false,
}: {
  children: React.ReactNode;
  className?: string;
  reveal?: boolean;
}) {
  return (
    <MagneticButton
      className={className}
      data-reveal={reveal ? "item" : undefined}
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config={JSON.stringify(CAL_CONFIG)}
    >
      {children}
    </MagneticButton>
  );
}
