import Gap from '@ui/Gap';
import clsx from 'clsx';
import { MouseEvent } from 'react';

import { ButtonPlusMinusProps } from './interfaces';
import styles from './styles.module.scss'

export default function ButtonPlusMinus({
    onMinusClick,
    amount,
    onPlusClick,
    className
}: ButtonPlusMinusProps) {
    const onClick = (e?: MouseEvent<HTMLDivElement>) =>
        e?.preventDefault();

    return (
        <Gap onClick={onClick} className={className}>
            <button
                onClick={onMinusClick}
                className={clsx('buttons', styles.button)}
                type="submit"
            >
                -
            </button>
            <p > {amount}</p>
            <button
                onClick={onPlusClick}
                className={clsx('buttons', styles.button)}
                type="submit"
            >
                +
            </button>
        </Gap>
    );
}
