import { NavLink, useLocation } from 'react-router-dom';
import IconMenu from './icons/IconMenu';
import Logo from './icons/Logo';
import IconMenuClose from './icons/IconMenuClose';
import { useEffect, useState } from 'react';
import Shadow from './Shadow';

const Navbar = () => {
  const location = useLocation();

  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    setOpenNavbar(false);
  }, [location]);

  return (
    <>
      <header className="mb-5 flex items-center justify-between py-5">
        <Logo />
        <nav>
          {!openNavbar && (
            <button className="lg:hidden" onClick={() => setOpenNavbar(true)}>
              <IconMenu />
            </button>
          )}
          <div
            className={
              (openNavbar
                ? 'translate-x-[-100%]; right-0 min-h-screen px-2 pt-5 transition duration-300'
                : 'right-[-200px] translate-x-[100%]') +
              ' fixed top-0 z-10 flex w-[200px] flex-col gap-8 bg-white font-semibold lg:container lg:relative lg:flex-row lg:translate-x-0 lg:right-0'
            }
          >
            {openNavbar && (
              <button
                className="self-end px-2 lg:hidden"
                onClick={() => setOpenNavbar(false)}
              >
                <IconMenuClose />
              </button>
            )}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/new">New</NavLink>
            <NavLink to="/popular">Popular</NavLink>
            <NavLink to="/trending">Trending</NavLink>
            <NavLink to="/categories">Categories</NavLink>
          </div>
        </nav>
      </header>
      {openNavbar && <Shadow />}
    </>
  );
};

export default Navbar;
