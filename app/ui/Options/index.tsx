import Gap from "@ui/Gap";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";

import { OptionsProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Options({ options, name, onChange }: OptionsProps) {
  const [choosenValue, setChoosen] = useState<null | string>(null);

  const { register } = useFormContext();
  const {
    onChange: onFormChange,
    onBlur,
    name: inputName,
    ref,
  } = register(name);

  const onOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFormChange(e);

    onChange?.(e.target.value);
    setChoosen(e.target.value);
  };

  return (
    <Gap wrap>
      {options.map((option) => (
        <label
          key={option}
          className={clsx(
            styles.size,
            clsx(choosenValue === option && styles.choosen)
          )}
        >
          {option}
          <input
            onChange={onOptionChange}
            onBlur={onBlur}
            name={inputName}
            ref={ref}
            id={option}
            value={option}
            className={styles.input}
            type="radio"
          />
        </label>
      ))}
    </Gap>
  );
}
