import { CATEGORIES } from "@lib/constants";
import Gap from "@ui/Gap";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function InfoCatalog() {
  return (
    <div className={styles.container}>
      <Gap size="large" direction="vertical" alignItems={"normal"}>
        <h2>Каталог Mollen</h2>
        <ul className={styles.categories}>
          {CATEGORIES.map(({ title, category }) => (
            <li key={title}>
              <Link href={{ pathname: "/catalog", query: { category } }}>
                <h5>{title}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </Gap>
      <Gap size="large" className={styles.info}>
        <p className="text_small">
          “При выборе варианта оплаты наличными, вы дожидаетесь приезда курьера
          и передаёте ему сумму за товар в рублях.
        </p>
        <p className="text_small">
          Курьер предоставляет товар, который можно осмотреть на предмет
          повреждений, соответствие указанным условиям.
        </p>
      </Gap>
    </div>
  );
}
