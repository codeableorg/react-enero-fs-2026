import { useEffect, useState } from 'react';
import Button from '../../ui/button';

type Theme = 'light' | 'dark';

export default function ThemeToggler() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  function toggleTheme() {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  }

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    html.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function handleChange(event: MediaQueryListEvent) {
      // Solo seguimos al sistema si el usuario NO eligió un tema explícitamente.
      if (!localStorage.getItem('theme')) {
        setTheme(event.matches ? 'dark' : 'light');
      }
    }

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const isDark = theme === 'dark';
  const label = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';

  return (
    <Button
      type='button'
      variant='ghost'
      size='xl-icon'
      aria-label={label}
      onClick={toggleTheme}
    >
      <img
        src={isDark ? '/images/icons/sun.svg' : '/images/icons/moon.svg'}
        alt=''
      />
    </Button>
  );
}
