import CircledIcon from "@ui/CircledIcon";
import colors from "@lib/styles/variables.module.scss";
import { ButtonGroupProps } from "react-multi-carousel";

import styles from "./styles.module.scss";

const { text_light, lines } = colors;

export const CustomButtonGroupAsArrows = ({
  next,
  previous,
  carouselState,
}: ButtonGroupProps) => {
  const { currentSlide = 0, totalItems, itemWidth } = carouselState || {};
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = totalItems === currentSlide + 1;

  return (
    <div>
      {!isFirstSlide && (
        <CircledIcon
          className={styles.prev}
          color={text_light}
          borderColor={lines}
          src="/icons/arrow.svg"
          alt="to previous page"
          onClick={previous}
        />
      )}

      {!isLastSlide && (
        <div style={{ left: itemWidth }}>
          <CircledIcon
            className={styles.next}
            color={text_light}
            borderColor={lines}
            src="/icons/arrow.svg"
            alt="to next page"
            onClick={next}
          />
        </div>
      )}
    </div>
  );
};
