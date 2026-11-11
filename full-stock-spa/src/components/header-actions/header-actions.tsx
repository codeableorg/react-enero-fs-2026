import Button from '../../ui/button';
import ThemeToggler from '../theme-toggler';
import styles from './styles.module.css';

type HeaderActionsProps = {
  cartItemsCount: number;
};

export default function HeaderActions({ cartItemsCount }: HeaderActionsProps) {
  return (
    <div className={styles['header-actions']}>
      <ThemeToggler />
      <Button
        href='/cart'
        variant='ghost'
        size='xl-icon'
        className='header-actions__cart'
        aria-label='Carrito de compras'
        data-js='cart-link'
      >
        <img
          src='/images/icons/cart.svg'
          alt='Carrito de compras'
          className={styles['header-actions__cart-icon']}
        />
        {cartItemsCount > 0 && (
          <span
            className={styles['header-actions__cart-badge']}
            data-js='cart-badge'
          >
            {cartItemsCount}
          </span>
        )}
      </Button>
    </div>
  );
}
