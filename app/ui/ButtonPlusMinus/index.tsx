import Gap from '@ui/Gap';
import { MouseEvent } from 'react';

import { ButtonPlusMinusProps } from './interfaces';

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
                className='buttons'
                type="submit"
            >
                -
            </button>
            <p > {amount}</p>
            <button
                onClick={onPlusClick}
                className='buttons'
                type="submit"
            >
                +
            </button>
        </Gap>
    );
}
