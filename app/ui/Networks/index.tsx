import { NETWORKS } from "@lib/constants";
import Gap from "@ui/Gap";
import Image from "next/image";

export default function Networks() {
  return (
    <Gap size="medium" >
      {NETWORKS.map(({ icon, link }) => (
        <a href={link} target="_blank" key={link}>
          <Image src={icon} alt={link} key={link} />
        </a>
      ))}
    </Gap>
  );
}
