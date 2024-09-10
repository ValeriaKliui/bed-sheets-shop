"use client";

import Options from "@ui/Options";
import { useState } from "react";

import { CharacteristicBottomProps } from "./intefaces";

export default function CharacteristicBottom({
  options,
}: CharacteristicBottomProps) {
  const [choosenOption, chooseOption] = useState(options ? options[0] : null);

  return (
    <div>
      {options && (
        <Options
          options={options}
          onClick={(option) => chooseOption(option)}
          choosenOption={choosenOption}
        />
      )}
    </div>
  );
}
