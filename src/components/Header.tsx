import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'How it works', path: '/how-it-works' },
  { label: 'Our approach', path: '/our-approach' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-ink/15">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
            aria-label="Irish Nature Corridor — Home"
          >
            <Logo className="h-9 w-auto sm:h-10" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-[15px] transition-colors ${
                    isActive
                      ? 'font-medium text-ink'
                      : 'font-light text-ink/70 hover:text-cornflower'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          className="md:hidden border-t border-ink/15 bg-paper"
          aria-label="Mobile"
        >
          <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-2 py-3 text-[15px] border-b border-ink/10 last:border-0 transition-colors ${
                    isActive ? 'font-medium text-ink' : 'font-light text-ink/70'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
