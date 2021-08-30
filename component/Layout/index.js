import Link from "next/link";
import React from "react";
import classes from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className={classes.header}>
        <div>
          <Link href="/">
            <h1 className={classes.header_title}>NEXT EVENTS</h1>
          </Link>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
