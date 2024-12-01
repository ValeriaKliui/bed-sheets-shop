"use client";

import { AdditionalPropertiesKeys } from "@lib/constants/types";
import Options from "@ui/Options";

import { CharacteristicBottomProps } from "./intefaces";

export default function CharacteristicBottom<T extends AdditionalPropertiesKeys>({
  options,
  name,
  type,
}: CharacteristicBottomProps<T>) {
  if (!options) return false;

  return (
    <div>
      {options && <Options options={options} name={name} type={type} />}
    </div>
  );
}
