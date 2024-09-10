import Gap from "@ui/Gap";
import clsx from "clsx";

import { OptionsProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Options({
  options,
  onClick,
  choosenOption,
}: OptionsProps) {
  return (
    <Gap wrap>
      {options.map((option) => (
        <div
          onClick={() => onClick(option)}
          className={clsx(
            styles.size,
            choosenOption === option && styles.choosen
          )}
          key={option}
        >
          <p>{option}</p>
        </div>
      ))}
    </Gap>
  );
}
