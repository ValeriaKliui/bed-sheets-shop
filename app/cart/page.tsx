'use client';

import useCart from '@hooks/useCart';
import Breadcrumbs from '@ui/Breadcrumbs';
import CircledIcon from '@ui/CircledIcon';
import Gap from '@ui/Gap';
import clsx from 'clsx';

export default function CartPage() {
    const { cleanCart } = useCart();

    return (
        <div className={clsx('wrapper', 'page_layout')}>
            <Breadcrumbs />
            <Gap justifyContent="space-between">
                <h2>Корзина</h2>
                <Gap>
                    <p className="text_secondary" onClick={cleanCart}>
                        Очистить корзину
                    </p>
                    <CircledIcon src="/icons/bag.svg"
                        alt={"clean cart"}
                    // color={primary}
                    />
                </Gap>{' '}
            </Gap>{' '}
        </div>
    );
}
