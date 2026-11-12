import type { ComponentPropsWithoutRef } from 'react';
import Button from '../../ui/button';
import styles from './styles.module.css';
import clsx from 'clsx';

type PriceFilterProps = ComponentPropsWithoutRef<'form'>;

export default function PriceFilter({
  className,
  ...delegated
}: PriceFilterProps) {
  return (
    <form className={clsx(styles['price-filter'], className)} {...delegated}>
      <fieldset>
        <legend className={styles['price-filter__legend']}>Precio</legend>
        <div className={styles['price-filter__inputs']}>
          <div className={styles['price-filter__field']}>
            <label htmlFor='minPrice' className={styles['price-filter__label']}>
              Min
            </label>
            <input
              id='minPrice'
              type='number'
              name='minPrice'
              min='0'
              step='0.01'
              value='minPrice'
            />
          </div>
          <div className={styles['price-filter__field']}>
            <label htmlFor='maxPrice' className={styles['price-filter__label']}>
              Max
            </label>
            <input
              id='maxPrice'
              type='number'
              name='maxPrice'
              min='0'
              step='0.01'
              value='maxPrice'
            />
          </div>
        </div>
      </fieldset>

      <Button
        type='submit'
        variant='secondary'
        size='xl'
        className={styles['price-filter__button']}
      >
        Filtar Productos
      </Button>
    </form>
  );
}
