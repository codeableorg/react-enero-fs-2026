import type { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  label: string;
  variant: string;
  size: string;
}

// export function Button({ label, className, ...props }: ButtonProps) {
//   return (
//     <button {...props} className={`btn ${className ?? ''}`}>
//       {label}
//     </button>
//   );
// }

export function Button({
  label,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  ...rest
}: ButtonProps) {
  function trackClick(variant: string) {
    console.log(variant);
  }

  const handleClick: ButtonProps['onClick'] = (event) => {
    trackClick(variant);
    onClick?.(event);
  };

  return (
    <button
      {...rest}
      className={`btn btn--${variant} btn--${size} ${className ?? ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
