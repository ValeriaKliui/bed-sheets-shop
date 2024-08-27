"use client";

import Gap from "@ui/Gap";
import clsx from "clsx";
import { useEffect, useRef } from "react";

import styles from "./styles.module.scss";

export default function Slider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const cards = new Array(40).fill(1).map((_, index) => index);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;

    if (container)
      container.ondragstart = function () {
        return false;
      };

    if (track) {
      const move = ({ offsetX, pageX, target, clientX }: MouseEvent) => {
        // if (container?.contains(target)) track.style.left = -pageX + "px";
      };

      track.onmousedown = () => {
        document.addEventListener("mousemove", move);
      };
      track.onmouseup = () => {
        document.removeEventListener("mousemove", move);
      };
      track.ondragstart = function () {
        return false;
      };
    }
  }, []);

  return (
    <div ref={containerRef} className={clsx(styles.container, "container")}>
      <Gap size="large" ref={trackRef} className={styles.track}>
        {cards.map((num, index) => (
          <div key={index}>{num}</div>
        ))}
      </Gap>
    </div>
  );
}
