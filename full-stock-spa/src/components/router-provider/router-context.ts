import { createContext } from 'react';

export type RouterContextValue = {
  path: string;
  navigate: (to: string) => void;
};

export const RouterContext = createContext<RouterContextValue | null>(null);
