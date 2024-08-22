import { CATEGORIES } from "@lib/constants";
import styles from "./styles.module.scss";
import Link from "next/link";
import Gap from "@ui/Gap";

export default function InfoCatalog() {
  return (
    <div className={styles.container}>
      <Gap size="large" direction="vertical">
        <h2>Каталог Mollen</h2>
        <ul className={styles.categories}>
          {CATEGORIES.map(({ title, url }) => (
            <li key={title}>
              <Link href={url}>
                <h5>{title}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </Gap>
      <Gap size="large" alignment="normal">
        <p>
          “При выборе варианта оплаты наличными, вы дожидаетесь приезда курьера
          и передаёте ему сумму за товар в рублях.
        </p>
        <p>
          Курьер предоставляет товар, который можно осмотреть на предмет
          повреждений, соответствие указанным условиям.
        </p>
      </Gap>
    </div>
  );
}
