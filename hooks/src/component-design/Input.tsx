import type { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  label: string;
}

export function Input({ id, label, ...props }: InputProps) {
  return (
    <label htmlFor={id}>
      {label}
      <input id={id} {...props} />
    </label>
  );
}
