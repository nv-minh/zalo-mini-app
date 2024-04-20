import { PATH_NAME } from "../constants/router";
import ListingIventory from "../containers/ListingIventory";
import HomePage from "../pages";
import AboutPage from "../pages/about";
import UserPage from "../pages/user";

export interface IRoute {
  path: string;
  component: React.FunctionComponent<{}>;
}

const publicRouters: IRoute[] = [
  { path: PATH_NAME.HOME, component: HomePage },
  { path: PATH_NAME.USER_PROFILE, component: UserPage },
  { path: PATH_NAME.ABOUT, component: AboutPage },
  { path: PATH_NAME.LISTINGIVENTORY, component: ListingIventory }
];

const privateRoutes = [];

export { publicRouters, privateRoutes };
