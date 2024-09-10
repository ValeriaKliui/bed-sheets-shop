import Gap from "@ui/Gap";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { OptionsProps } from "./interfaces";

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
          {option}
        </div>
      ))}
    </Gap>
  );
}
