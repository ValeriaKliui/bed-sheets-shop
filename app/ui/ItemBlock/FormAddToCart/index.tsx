"use client";

import useCart from "@hooks/useCart";
import Accordion from "@ui/Accordion";
import ButtonWithCartActions from "@ui/ButtonWithCartActions";
import Gap from "@ui/Gap";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import CharacteristicBottom from "../CharacteristicBottom";
import CharacteristicHeader from "../CharacteristicHeader";
import { FormAddToCartProps, FormValues } from "./interfaces";
import styles from "./styles.module.scss";

export default function FormAddToCart({ sizes, id }: FormAddToCartProps) {
  const [isError, setIsError] = useState(false);
  const methods = useForm<FormValues>();

  const { addToCart } = useCart();

  const currentSize = methods.watch("size");
  const isSizesExists = sizes && sizes?.length > 0;
  const isSizeChoosen = (isSizesExists && currentSize) || !sizes;

  const onSubmit = (data: FormValues) => {
    if (isSizesExists && !currentSize) {
      setIsError(true);
    } else addToCart(id, data.size);
  };

  const resetError = () => setIsError(false);

  const characteristics = [
    {
      header: <CharacteristicHeader title="Размер" />,
      bottom: <CharacteristicBottom options={sizes} name="size" />,
    },
  ];

  return (
    <FormProvider {...methods}>
      <form
        className={styles.form}
        onSubmit={methods.handleSubmit(onSubmit)}
        onChange={resetError}
      >
        <Gap direction="vertical" size="medium" alignItems="flex-start">
          <Accordion
            items={characteristics}
            className={styles.characteristics}
          />
          {isError && <p className="text_error">Пожалуйста, выберите размер</p>}
          <ButtonWithCartActions
            id={id}
            className={styles.button}
            size={currentSize}
            isDisabled={!isSizeChoosen}
          />
        </Gap>
      </form>
    </FormProvider>
  );
}
