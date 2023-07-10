import { Outlet } from "react-router-dom";

import { Header } from "..";

import classes from "./layout.module.css";

export const Layout = () => (
  <>
    <div className={classes.headerWrapper}>
      <Header
        title="Find & track the best free-to-play games!"
        subtitle="Search for what to play next!"
      />
    </div>
    <Outlet />
  </>
);
