import Gap from "@ui/Gap";
import { useFormContext } from "react-hook-form";

import { CharacteristicHeaderProps } from "./interfaces";

export default function CharacteristicHeader({
  title,
  name,
}: CharacteristicHeaderProps) {
  const {
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors && errors[name]?.message;

  return (
    <Gap>
      <p>{title}</p>
      {errorMessage && <p className="text_error">{errorMessage}</p>}
    </Gap>
  );
}
