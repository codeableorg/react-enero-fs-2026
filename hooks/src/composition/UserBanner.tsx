import { type ReactNode } from 'react';
import s from './UserBanner.module.css';
import Banner from './Banner';

type UserBannerProps = {
  user?: { name: string };
  type: 'success' | 'warning' | 'error';
  children: ReactNode;
};

function UserBanner({ user, type, children }: UserBannerProps) {
  return (
    <Banner type={type}>
      {children}
      <p className={s.user}>{user ? user.name : 'Anonymous'}</p>
    </Banner>
  );
}

export default UserBanner;
