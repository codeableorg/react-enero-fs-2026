import type { ComponentProps } from 'react';

interface TextAreaProps extends ComponentProps<'textarea'> {
  label: string;
}

export function TextArea({ id, label, ...props }: TextAreaProps) {
  return (
    <label htmlFor={id}>
      {label}
      <textarea id={id} {...props} />
    </label>
  );
}
