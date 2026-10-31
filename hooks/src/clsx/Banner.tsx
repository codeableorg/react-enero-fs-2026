import { type ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Banner.module.css';

type BannerProps = {
  user?: { name: string };
  type: 'success' | 'warning' | 'error';
  children: ReactNode;
  isHighLighted?: boolean;
};

function Banner({ user, type, children, isHighLighted }: BannerProps) {
  const bannerClassName = clsx(
    styles.banner,
    styles[type],
    isHighLighted && styles.highlighted
  );

  return (
    <div className={bannerClassName}>
      <p className={styles.user}>{user ? user.name : 'Anonymous'}</p>
      {children}
    </div>
  );
}

export default Banner;
