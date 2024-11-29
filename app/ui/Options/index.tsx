import { ADDITIONAL_PROPERTIES } from "@lib/constants/types";
import Gap from "@ui/Gap";
import Option from "@ui/Option";
import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";

import { OptionsProps } from "./interfaces";

export default function Options({
  options,
  name,
  onChange,
  type,
}: OptionsProps) {
  const [choosenOption, chooseOption] = useState<null | string>(null);

  const { register } = useFormContext();

  const onOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    chooseOption(e.target.value);
  };

  return (
    <Gap wrap>
      {options.map((option) => (
        <Option
          onChange={onOptionChange}
          isChoosen={choosenOption === option}
          required={`Необходимо выбрать ${ADDITIONAL_PROPERTIES[name]}`}
          register={register}
          type={type}
          option={option}
          key={option}
          name={name}
        />
      ))}
    </Gap>
  );
}
