import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

type Theme = 'light' | 'dark';

/**
 * Theme toggler for switching between light and dark modes.
 */
const ThemeToggler = () => {
  const [activeTheme, setActiveTheme] = useState<Theme>('light');
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  /**
   * Load the preferred theme.
   * If the preferred theme is not set - check for preferred color scheme.
   */
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setActiveTheme(savedTheme);
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setActiveTheme('dark');
      } else {
        setActiveTheme('light');
      }
    } 
  }, [])

  /**
   * Add class dark to the documentElement adhering to Tailwind specification.
   * 
   * @see https://tailwindcss.com/docs/dark-mode Tailwind Dark mode
   */
  useEffect(() => {
    if (activeTheme === 'dark') { 
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  return (
    <div className='p-1 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-zinc-700/80 transition-all rounded-full'>
      <Switch
        checked={activeTheme === 'dark'}
        onChange={() => setActiveTheme(inactiveTheme)}
        className={`
          ${activeTheme === 'dark' ? 'bg-indigo-800' : 'bg-yellow-500'}
          relative inline-flex items-center h-7 rounded-full w-14 transition-colors duration-500
        `}
      >
        <div className='w-full flex flex-row justify-center space-x-2'>
          <HiMoon className='text-white w-5 h-5' />
          <HiSun className='text-white w-5 h-5'/>
        </div>
        <span
          className={`
            ${activeTheme === 'dark' ? 'translate-x-8' : 'translate-x-1'}
            absolute w-5 h-5 transform bg-slate-100 rounded-full transition-all
          `}
        >
        </span>
      </Switch>
    </div>
  )
}

export default ThemeToggler;