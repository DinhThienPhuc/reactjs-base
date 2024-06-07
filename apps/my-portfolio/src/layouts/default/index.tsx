import { IResponsiveTopnavItem } from "@phantomthief-react/modules";
import { Typography } from "@phantomthief-react/components";
import { Outlet } from "react-router-dom";
import Styled from "./style";

const topnavItems: IResponsiveTopnavItem[] = [
  {
    key: "my-name",
    content: (
      <Typography font="FiraCode-Regular" size={16} color="#607b96;">
        dinh-thien-phuc
      </Typography>
    ),
  },
  {
    key: "hello",
    content: (
      <Typography font="FiraCode-Regular" size={16} color="#ffffff">
        _hello
      </Typography>
    ),
  },
  {
    key: "about-me",
    content: (
      <Typography font="FiraCode-Regular" size={16} color="#ffffff">
        _about-me
      </Typography>
    ),
  },
  {
    key: "projects",
    content: (
      <Typography font="FiraCode-Regular" size={16} color="#ffffff">
        _projects
      </Typography>
    ),
  },
  {
    key: "contact-me",
    content: (
      <Typography font="FiraCode-Regular" size={16} color="#ffffff">
        _contact-me
      </Typography>
    ),
  },
];

const LayoutDefault = () => {
  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <Styled.ResponsiveTopnav
          firstItemSelectable={false}
          items={topnavItems}
          activeKey="hello"
        />
        <Outlet />
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default LayoutDefault;
