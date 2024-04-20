import { PATH_NAME } from "../constants/router";
import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { BottomNavigation as BottomNavigationZmpUI, Icon } from "zmp-ui";
import { MenuItem } from "../types/menu";

const tabs: Record<string, MenuItem> = {
  [`${PATH_NAME.HOME}`]: {
    label: "Trang chủ",
    icon: < Icon icon="zi-home" />
  },
  [`${PATH_NAME.LISTINGIVENTORY}`]: {
    label: "Danh sách căn",
    icon: < Icon icon="zi-home" />
  },
  [`${PATH_NAME.ABOUT}`]: {
    label: "Ưu đãi",
    icon: < Icon icon="zi-home" />
  },
  [`${PATH_NAME.AVM}`]: {
    label: "Định giá",
    icon: < Icon icon="zi-home" />
  },
  [`${PATH_NAME.ABOUT}`]: {
    label: "Cá nhân",
    icon: < Icon icon="zi-home" />
  },
};

export type TabKeys = keyof typeof tabs;

export const BottomNavigation: FC = () => {
  const [activeTab, setActiveTab] = useState<TabKeys>("/");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handleActive();
  }, [location.pathname]);

  const handleActive = () => {
    setActiveTab(location.pathname);
  };
  return (
    <BottomNavigationZmpUI
      id="footer"
      activeKey={activeTab}
      onChange={(key: TabKeys) => setActiveTab(key)}
      className="z-50 bottom-navigation fixed bottom-0"
    >
      {Object.keys(tabs).map((path: TabKeys) => (
        <BottomNavigationZmpUI.Item
          className="justify-center"
          key={path}
          label={tabs[path].label}
          icon={tabs[path].icon}
          activeIcon={tabs[path]?.activeIcon}
          onClick={() => navigate(path)}
        />
      ))}
    </BottomNavigationZmpUI>
  );

};
