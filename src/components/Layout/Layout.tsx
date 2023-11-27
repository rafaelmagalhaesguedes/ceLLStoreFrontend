import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import NavBarTop from '../NavBarTop/NavBarTop';

function Layout() {
  return (
    <>
      <NavBarTop />
      <Header />
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;
