import { type ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Banner.module.css';

type BannerProps = {
  user?: { name: string };
  type: 'success' | 'warning' | 'error';
  children: ReactNode;
};

function Banner({ user, type, children }: BannerProps) {
  const bannerClassName = clsx(styles.banner, styles[type]);

  return (
    <div className={bannerClassName}>
      <p className={styles.user}>{user ? user.name : 'Anonymous'}</p>
      {children}
    </div>
  );
}

export default Banner;
