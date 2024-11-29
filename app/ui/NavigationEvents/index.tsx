"use client";

import Loader from "@ui/Loader";
import { useRouter } from "next/navigation";
import { useEffect, useOptimistic } from "react";

import styles from "./styles.module.scss";

export default function NavigationEvents() {
  const router = useRouter();
  const [loading, setLoading] = useOptimistic(false);

  useEffect(() => {
    if (router.push.name === "patched") return;
    const push = router.push;
    router.push = function patched(...args) {
      setLoading(true);
      push.apply(history, args);
    };
  }, [router, setLoading]);

  if (!loading) return false;

  return <div className={styles.container}>{<Loader />}</div>;
}
