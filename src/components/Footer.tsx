import { Link } from 'react-router-dom';
import Logo from './Logo';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'How it works', path: '/how-it-works' },
  { label: 'Our approach', path: '/our-approach' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Logo + strapline */}
          <div className="max-w-xs">
            <Logo variant="reversed" className="h-10 w-auto mb-6" />
            <p className="text-paper/80 font-light text-[15px] leading-relaxed">
              Free to use, open data, mapped by anyone.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer">
            <p className="font-medium text-paper/60 text-xs uppercase tracking-wider mb-4">
              Pages
            </p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[15px] font-light text-paper/80 hover:text-cornflower transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-paper/20">
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
            <p className="text-paper/60 font-light text-[13px]">
              Funded by the Lifes2Good Foundation and Dulra.
            </p>
            <p className="text-paper/60 font-light text-[13px]">
              &copy; 2026 Dulra / Glas Future Limited.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
