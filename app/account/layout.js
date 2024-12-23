import SideNavigation from '../_components/SideNavigation';

export default function Layout({ children }) {
  return (
    <div className="grid lg:grid-cols-[16rem_1fr] grid-cols-1 h-full md:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
