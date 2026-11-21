import Button from '../../ui/button';
import Container from '../../ui/container';
import HeaderActions from '../header-actions';
import MainNav from '../main-nav';
import styles from './styles.module.css';

type HeaderMainProps = {
  cartItemsCount: number;
};

export default function HeaderMain({ cartItemsCount }: HeaderMainProps) {
  return (
    <Container className={styles['header-main']}>
      <div className={styles['header-main__top']}>
        <Button href='/'>
          <img
            src='/images/fullstock-logo.svg'
            alt='FullStock inicio'
            width='128'
            height='32'
          />
        </Button>
        <HeaderActions cartItemsCount={cartItemsCount} />
      </div>
      <div className={`separator ${styles['header-main__separator']}`}></div>
      <MainNav />
    </Container>
  );
}
