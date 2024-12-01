import Gap from "@ui/Gap";
import { useFormContext } from "react-hook-form";

import { CharacteristicHeaderProps } from "./interfaces";

export default function CharacteristicHeader<T extends string>({
  title,
  name,
}: CharacteristicHeaderProps<T>) {
  const {
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors && errors[name]?.message?.toString();

  return (
    <Gap>
      <p>{title}</p>
      {errorMessage && <p className="text_error">{errorMessage}</p>}
    </Gap>
  );
}
