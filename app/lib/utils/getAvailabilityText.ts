import { Availability } from "@lib/constants/types";

export default function getAvailabilityText(availability?: string | null) {
  if (availability === "false") return Availability.unavailable;
  return Availability.available;
}
