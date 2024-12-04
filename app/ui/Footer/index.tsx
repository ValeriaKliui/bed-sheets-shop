import { LINKS } from "@lib/constants";
import CallLinkModal from "@ui/CallLinkModal";
import Logo from "@ui/icons/Logo";
import Networks from "@ui/Networks";
import colors from "@variables.module.scss";
import clsx from "clsx";
import Link from "next/link";

import styles from "./styles.module.scss";

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

        {LINKS.map((links, index) => (
          <div className={clsx(styles.column, styles.links)} key={index}>
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
          <CallLinkModal />
        </div>
        <Networks />
      </div>
    </footer>
  );
}
