import type { ReactNode } from 'react';
import s from './Card.module.css';

type CardProps = {
  children: ReactNode;
  as?: 'div' | 'main' | 'aside' | 'article' | 'section' | 'li';
};

function Card({ children, as: Tag = 'div' }: CardProps) {
  return <Tag className={s.card}>{children}</Tag>;
}

export default Card;
