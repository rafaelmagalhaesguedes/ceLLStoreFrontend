import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import NavBarTop from '../NavBarTop/NavBarTop';

function Layout() {
  return (
    <>
      <NavBarTop />
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
