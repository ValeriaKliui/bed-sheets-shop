"use client";

import getAvailabilityText from "@lib/utils/getAvailabilityText";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import ButtonWithIndicator from "../ButtonWithIndicator";

export default function Availability() {
  const searchParams = useSearchParams();
  const [availability, toggleAvailability] = useState<null | boolean>(
    searchParams.get("inStock") === "true"
  );
  const [isPressed, setIsPressed] = useState(availability);

  const pathname = usePathname();
  const { replace } = useRouter();

  const onSortAvailable = () => {
    const params = new URLSearchParams(searchParams);
    params.set("inStock", String(!availability));
    params.set("page", "1");
    toggleAvailability(!availability);
    setIsPressed(!isPressed);
    replace(`${pathname}?${params.toString()}`);
  };

  const availabilityText = getAvailabilityText(searchParams.get("inStock"));

  return (
    <ButtonWithIndicator onClick={onSortAvailable} isPressed={isPressed}>
      {availabilityText}
    </ButtonWithIndicator>
  );
}
