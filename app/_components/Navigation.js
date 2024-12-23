import Link from 'next/link';
import { auth } from '../_lib/auth';
import AccountLinks from './AccountLinks';
import SignOutButton from './SignOutButton';

export default async function Navigation({ hide = false }) {
  const session = await auth();

  return (
    <>
      <li>
        <Link
          href="/cabins"
          className="hover:text-accent-400 transition-colors"
        >
          Cabins
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-accent-400 transition-colors">
          About
        </Link>
      </li>
      <li>
        {session?.user?.image ? (
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors flex items-center gap-4"
          >
            <img
              className="h-8 rounded-full"
              src={session.user.image}
              alt={session.user.name}
              referrerPolicy="no-referrer"
            />
            <span>Guest area</span>
          </Link>
        ) : (
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        )}
      </li>
      {!hide && <AccountLinks />}
      <li className="mt-auto absolute bottom-0">
      {!hide && <SignOutButton />}
      
      </li>
    </>
  );
}
