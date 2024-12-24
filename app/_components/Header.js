import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';

function Header() {
  return (
    <div className="drawer z-50 ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar w-full ">
          <div className="mx-2 flex-1 px-2">
            <Logo />
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal text-xl items-center">
              <Navigation hide={true} />
            </ul>
          </div>
          <div className="flex-none lg:hidden ">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar "
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-72 p-4 text-xl space-y-4">
          <li className="mb-6 border-b-2 border-base-900">
            <Logo />
          </li>
          <Navigation />
        </ul>
      </div>
    </div>
  );
}

export default Header;
