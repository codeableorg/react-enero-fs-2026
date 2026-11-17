import type { MouseEvent } from 'react';
import Button from '../../ui/button';
import Container from '../../ui/container';
import HeaderActions from '../header-actions';
import MainNav from '../main-nav';
import styles from './styles.module.css';

type HeaderMainProps = {
  cartItemsCount: number;
  navigate: (to: string) => void;
};

export default function HeaderMain({
  cartItemsCount,
  navigate
}: HeaderMainProps) {
  function handleLinkClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    navigate(event.currentTarget.getAttribute('href')!);
  }

  return (
    <Container className={styles['header-main']}>
      <div className={styles['header-main__top']}>
        <Button href='/' onClick={handleLinkClick}>
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
      <MainNav navigate={navigate} />
    </Container>
  );
}
