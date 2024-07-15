import { useNavigate } from "react-router-dom";

import { Typography } from "@phantomthief-react/components";
import { IResponsiveTopnavItem } from "@phantomthief-react/modules";

import Styled from "./style";

const topnavItems: IResponsiveTopnavItem[] = [
  {
    key: "my-name",
    content: <Typography color="#607b96">dinh-thien-phuc</Typography>,
  },
  {
    key: "about-me",
    content: <Typography>_about-me</Typography>,
  },
  {
    key: "projects",
    content: <Typography>_projects</Typography>,
  },
  {
    key: "contact-me",
    content: <Typography>_contact-me</Typography>,
  },
];

const Topnav = () => {
  const navigate = useNavigate();

  return (
    <Styled.Container
      firstItemSelectable={false}
      items={topnavItems}
      activeKey="hello"
      hamburgerProps={{
        color: "#607b96",
      }}
      onClick={(_, key) => {
        navigate(key ? `/${key}` : "/");
      }}
    />
  );
};

export default Topnav;
