"use client";

import useCart from "@hooks/useCart";
import Accordion from "@ui/Accordion";
import ButtonWithCartActions from "@ui/ButtonWithCartActions";
import Gap from "@ui/Gap";
import { FormProvider, useForm } from "react-hook-form";

import CharacteristicBottom from "../CharacteristicBottom";
import CharacteristicHeader from "../CharacteristicHeader";
import styles from "./styles.module.scss";

export default function FormAddToCart({ sizes, id }) {
  const methods = useForm();

  const { addToCart } = useCart();
  const currentSize = methods.watch("size");

  const onSubmit = (data) => {
    addToCart(id, data.size);
  };

  const characteristics = [
    {
      header: <CharacteristicHeader title="Размер" />,
      bottom: <CharacteristicBottom options={sizes} name="size" />,
    },
  ];

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <Gap direction="vertical" size="medium" alignItems="flex-start">
          <Accordion
            items={characteristics}
            className={styles.characteristics}
          />
          <p className="text_error">Пожалуйста, выберите размер!</p>
          <ButtonWithCartActions
            id={id}
            className={styles.button}
            size={currentSize}
          />
        </Gap>
      </form>
    </FormProvider>
  );
}
