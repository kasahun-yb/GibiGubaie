// components/NavLink.js
import React from 'react';
import Link from 'next/link';

function NavLink({ href, children, activeClassName, ...props }) {
  
  return (
    <Link href={href} {...props}>
      <a className={props.router.pathname === href ? activeClassName : ''}>
        {children}
      </a>
    </Link>
  );
}

export default NavLink;
