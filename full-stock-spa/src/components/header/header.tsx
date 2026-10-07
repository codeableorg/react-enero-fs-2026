import AuthNav from './components/auth-nav';
import HeaderMain from './components/header-main';

type HeaderProps = {
  className?: string;
  user: { email: string } | null;
  cartItemsCount: number;
};

export default function Header({
  className,
  user,
  cartItemsCount
}: HeaderProps) {
  return (
    <header className={className}>
      <AuthNav user={user} />
      <HeaderMain cartItemsCount={cartItemsCount} />
    </header>
  );
}
