import CircledIcon from '@ui/CircledIcon';
import colors from '@variables.module.scss';
import styles from './styles.module.scss';

const { text_light, lines } = colors;

export const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
        <div>
            <CircledIcon
                className={styles.prev}
                color={text_light}
                borderColor={lines}
                src="/icons/arrow.svg"
                alt="to previous page"
                onClick={previous}
            />
            <CircledIcon
                className={styles.next}
                color={text_light}
                borderColor={lines}
                src="/icons/arrow.svg"
                alt="to next page"
                onClick={next}
            />
        </div>
    );
};
