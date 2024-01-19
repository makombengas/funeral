'use client';

import Link from 'next/link';
import './navbar.scss';
import { nav } from '@/data/data';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [changeNav, setChangeNav] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 80) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  useEffect(() => {
    handleChange();
    window.addEventListener('scroll', handleChange);
  }, []);

  return (
    <div className='navbarContainer'>
      <div className={changeNav ? 'change' : 'topBar'}>
        <Link href='/' onClick={() => setOpenMenu(false)}>
          <h1>Célebration de vie</h1>
        </Link>
        {openMenu ? (
          <div className='hamburgerMenu' onClick={() => setOpenMenu(!openMenu)}>
            <hr
              style={
                openMenu && {
                  transform: 'rotate(45deg)',
                  transition: 'all 1s ease',
                }
              }
            />
            <hr style={{ display: 'none' }} />
            <hr
              style={
                openMenu && {
                  transform: 'rotate(-45deg)',
                  position: 'absolute',
                  transition: 'all 1s ease',
                }
              }
            />
          </div>
        ) : (
          <div className='hamburgerMenu' onClick={() => setOpenMenu(!openMenu)}>
            <hr />
            <hr />
            <hr />
          </div>
        )}
      </div>
      <div className={openMenu ? ' handyMenu' : 'bottomBar'}>
        <div className='logo'>
          <span>Mme veuve Ngandjo née Nkwatchou berthe</span>
        </div>
        <div className='navMenu'>
          <ul>
            {nav.map((link) => {
              return (
                <Link
                  key={link.id}
                  className={pathname == `${link.link}` ? 'active' : ''}
                  href={link.link}
                  onClick={() => setOpenMenu(false)}
                >
                  <li>{link.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
