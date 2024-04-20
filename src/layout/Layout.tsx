import React from "react";
import { Page } from "zmp-ui";
import { BottomNavigation } from "./bottom-navigation-page";

const Layout = ({ children }) => (
  <Page className="bg-white">
    {children}
    <BottomNavigation />
  </Page>
);

export default Layout;
