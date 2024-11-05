"use client";

import Options from "@ui/Options";

import { CharacteristicBottomProps } from "./intefaces";

export default function CharacteristicBottom({
  options,
  name,
}: CharacteristicBottomProps) {
  if (!options) return false;

  return <div>{options && <Options options={options} name={name} />}</div>;
}
