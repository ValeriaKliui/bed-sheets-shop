"use client";

import useCart from "@hooks/useCart";
import Accordion from "@ui/Accordion";
import ButtonWithCartActions from "@ui/ButtonWithCartActions";
import Gap from "@ui/Gap";
import { FormProvider, useForm } from "react-hook-form";

import CharacteristicBottom from "../CharacteristicBottom";
import CharacteristicHeader from "../CharacteristicHeader";
import { FormAddToCartProps, FormValues } from "./interfaces";
import styles from "./styles.module.scss";

export default function FormAddToCart({
  additionalProperties,
  id,
}: FormAddToCartProps) {
  const { handleSubmit, ...methods } = useForm<FormValues>();

  const { sizes, aromas, colors, textiles } = additionalProperties;

  const { addToCart } = useCart();

  const onSubmit = (data) => {
    addToCart({ id, size: null });
  };

  const characteristics = [
    {
      header: <CharacteristicHeader title="Размер" name="sizes" />,
      bottom: <CharacteristicBottom options={sizes} name="sizes" />,
    },
    {
      header: <CharacteristicHeader title="Аромат" name="aromas" />,
      bottom: <CharacteristicBottom options={aromas} name="aromas" />,
    },
    {
      header: <CharacteristicHeader title="Цвет" name="colors" />,
      bottom: (
        <CharacteristicBottom options={colors} name="colors" type="color" />
      ),
    },
    {
      header: <CharacteristicHeader title="Материал" name="textiles" />,
      bottom: <CharacteristicBottom options={textiles} name="textiles" />,
    },
  ];

  return (
    <FormProvider handleSubmit={handleSubmit} {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Gap direction="vertical" size="medium" alignItems="flex-start">
          <Accordion
            items={characteristics}
            className={styles.characteristics}
          />
          <ButtonWithCartActions
            id={id}
            className={styles.button}
            additionalProperties={additionalProperties}
          />
        </Gap>
      </form>
    </FormProvider>
  );
}
