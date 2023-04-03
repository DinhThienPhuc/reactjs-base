import {
  Grid as IconGrid,
  Home as IconHome,
  Search as IconSearch,
} from "react-feather";

import ROUTES from "routes/constants";
import Styled from "./style";
import TabbarItem from "../tabbar-item";

const Tabbar = () => (
  <Styled.Container>
    <TabbarItem route={ROUTES.SEARCH} label={"Search"} Icon={IconSearch} />
    <TabbarItem route={ROUTES.HOME} label={"Home"} Icon={IconHome} />
    <TabbarItem
      route={ROUTES.GRAPH}
      label={"Graph"}
      Icon={IconGrid}
      hasFighterCompareBadge
    />
  </Styled.Container>
);

export default Tabbar;
