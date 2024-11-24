import { ADDITIONAL_PROPERTIES } from "@lib/constants/types";
import Gap from "@ui/Gap";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";

import { OptionsProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Options({
  options,
  name,
  onChange,
  type,
}: OptionsProps) {
  const [choosenValue, setChoosen] = useState<null | string>(null);

  const {
    register,
  } = useFormContext();

  const onOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setChoosen(e.target.value);
  };

  const isColor = type === "color";

  return (
    <Gap wrap size={isColor ? "large" : "small"}>
      {options.map((option) => (
        <label key={option} className={clsx(isColor && styles.colorContainer)}>
          {isColor && (
            <div
              className={clsx(
                styles.option,
                choosenValue === option && styles.choosen
              )}
              style={{ background: option }}
            />
          )}
          {!isColor && <p
            className={clsx(
              styles.option,
              choosenValue === option && styles.choosen
            )}
          >
            {option}
          </p>}
          <input
            id={option}
            value={option}
            className={styles.input}
            type="radio"
            {...register(name, {
              required: `Необходимо выбрать ${ADDITIONAL_PROPERTIES[name]}`,
              onChange: onOptionChange,
            })}
          />
        </label>
      ))}
    </Gap>
  );
}
