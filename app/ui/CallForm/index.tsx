import { CALL_FORM_DATA } from "@lib/constants";
import Button from "@ui/Button";
import Gap from "@ui/Gap";
import { useForm } from "react-hook-form";

import styles from ".//styles.module.scss";
import CallFormField from "./CallFormField";

export default function CallForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data, errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Gap direction="vertical" size="medium" alignItems="flex-start">
        <Gap direction="vertical">
          {CALL_FORM_DATA.map(
            ({ name, label, required, placeholder, pattern, type }) => (
              <CallFormField
                name={name}
                label={label}
                required={required}
                placeholder={placeholder}
                register={register}
                pattern={pattern}
                type={type}
                key={name}
              />
            )
          )}
        </Gap>
        <Gap>
          <input
            {...register("isAgreePersonal")}
            id="isAgreePersonal"
            type="checkbox"
            value="true"
          />
          <label htmlFor="isAgreePersonal">
            Я согласен на обработку персональных данных
          </label>
        </Gap>
        <Button type="submit">Отправить</Button>
      </Gap>
    </form>
  );
}
