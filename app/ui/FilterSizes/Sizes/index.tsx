"use client";

import Options from "@ui/Options";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

import { SizesParams } from "./interfaces";

export default function Sizes({ sizes }: SizesParams) {
  const methods = useForm();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onOptChange = (size: string) => {
    console.log(size);
    const params = new URLSearchParams(searchParams);
    params.set("size", size);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <FormProvider {...methods}>
      <Options options={sizes} name={"sizes"} onOptChange={onOptChange} />
    </FormProvider>
  );
}
