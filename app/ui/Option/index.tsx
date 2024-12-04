import clsx from "clsx";

import { OptionProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Option({
  type,
  option,
  isChoosen,
  register,
  onChange,
  required,
  name,
}: OptionProps) {
  const isColor = type === "color";

  return (
    <label
      key={option}
      className={clsx("label_radio", isColor && styles.colorContainer)}
    >
      {isColor && (
        <div
          className={clsx(styles.option, isChoosen && styles.choosen)}
          style={{ background: option }}
        />
      )}
      {!isColor && (
        <p className={clsx(styles.option, isChoosen && styles.choosen)}>
          {option}
        </p>
      )}
      <input
        id={option}
        value={option}
        className={styles.input}
        type="radio"
        {...register(name, {
          required,
          onChange,
        })}
      />
    </label>
  );
}
