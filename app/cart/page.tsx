import Breadcrumbs from '@ui/Breadcrumbs';
import CartBottom from '@ui/CartBottom';
import CartInfo from '@ui/CartInfo';
import Gap from '@ui/Gap';
import clsx from 'clsx';
import styles from './styles.module.scss';

export default function CartPage() {
  return (
    <div
      className={clsx('wrapper', 'page_layout', styles.container)}
    >
      <div>
        <Breadcrumbs />
        <CartInfo />
      </div>
      <CartBottom />
    </div>
  );
}
