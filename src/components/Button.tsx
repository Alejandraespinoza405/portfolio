'use client'

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-3 py-2 rounded-xl border dark:border-neutral-700"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? '☀️ DARK' : '🌙 LIGHT'}
    </button>
  );
}