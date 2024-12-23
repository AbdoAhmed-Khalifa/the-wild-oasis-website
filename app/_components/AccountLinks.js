import Link from 'next/link';
import SignOutButton from './SignOutButton';

const navLinks = [
  {
    name: 'Profile',
    href: '/account',
  },
  {
    name: 'Reservations',
    href: '/account/reservations',
  },
  {
    name: 'Guest profile',
    href: '/account/profile',
  },
];
function AccountLinks() {
  return (
    <ul className="flex flex-col gap-2 h-full text-lg ml-6 ">
      {navLinks.map(link => (
        <li key={link.name}>
          <Link
            className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200
              `}
            href={link.href}
          >
            <span>{link.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default AccountLinks;
