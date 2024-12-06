import Button from "@ui/Button";

import { SuccessInfoProps } from "./interfaces";

export default function SuccessInfo({ onAgree }: SuccessInfoProps) {
  return (
    <div>
      <h4>
        TODOTOOOOTOTO TODOTOOOOTOTOTODOTOOOOTOTOTODOTOOOOTOTO
        TODOTOOOOTOTOTODOTOOOOTOTO
      </h4>
      <Button onClick={onAgree}>ОК</Button>
    </div>
  );
}
