"use client";

import {
  ADDITIONAL_PROPERTIES,
  AdditionalPropertiesKeys,
} from "@lib/constants/types";
import Gap from "@ui/Gap";
import Options from "@ui/Options";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { PropertiesParams } from "./interfaces";

export default function Properties({ availableProperties }: PropertiesParams) {
  const methods = useForm();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onOptionChange = useCallback(
    (property: AdditionalPropertiesKeys) => (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(property, value);

      replace(`${pathname}?${params.toString()}`);
    },
    [pathname, replace, searchParams]
  );

  return (
    <FormProvider {...methods}>
      <Gap direction="vertical" alignItems="flex-start">
        {availableProperties.map(([property, values]) => {
          return (
            <Gap direction="vertical" alignItems="flex-start" key={property}>
              <h6>{ADDITIONAL_PROPERTIES[property]}</h6>
              <Options
                options={values}
                name={property}
                onChange={(size) => onOptionChange(property)(size)}
                type={property.slice(0, -1)}
              />
            </Gap>
          );
        })}
      </Gap>
    </FormProvider>
  );
}
