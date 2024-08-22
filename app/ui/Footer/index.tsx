import Logo from "@ui/icons/Logo";
import colors from "@variables.module.scss";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { footerLinks, networks } from "@lib/constants";
import Link from "next/link";
import Image from "next/image";
import Gap from "@ui/Gap";

export default function Footer() {
  const { text } = colors;

  return (
    <footer className={clsx("wrapper", styles.footer)}>
      <div className={clsx(styles.links_grid, "text_secondary")}>
        <div className={styles.column}>
          <Logo fill={text} opacity={0.2} />
          <div>
            <p>2021 © Mollen.</p>
            <p> Все права защищены</p>
          </div>
        </div>

        {footerLinks.map((links, index) => (
          <div className={styles.column} key={index}>
            {links.map(({ title, url }) => (
              <Link href={url} key={title} className="text_secondary">
                {title}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.column}>
        <div className={styles.column}>
          <h4>8 800 222 22 22</h4>
          <a href="tel:88002222222">Заказать звонок</a>
        </div>
        <Gap size="medium">
          {networks.map(({ icon, link }) => (
            <a
              href={link}
              target="_blank"
              key={link}
              className={styles.network_link}
            >
              <Image src={icon} alt={link} key={link} />
            </a>
          ))}
        </Gap>
      </div>
    </footer>
  );
}
