import { OptionsProps } from "@ui/Options/interfaces";
import { ChangeEvent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface OptionProps extends Pick<OptionsProps, "type" | "name"> {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  option: string;
  isChoosen?: boolean;
  required?: string;
  register: UseFormRegister<FieldValues>;
}
