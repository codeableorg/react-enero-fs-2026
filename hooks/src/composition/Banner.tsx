import { type ReactNode } from 'react';
import clsx from 'clsx';
import s from './Banner.module.css';

type BannerProps = {
  type: 'success' | 'warning' | 'error';
  children: ReactNode;
};

function Banner({ type, children }: BannerProps) {
  const bannerClassName = clsx(s.banner, s[type]);

  return <div className={bannerClassName}>{children}</div>;
}

export default Banner;
