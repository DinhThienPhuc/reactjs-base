import {
  Linkedin as IconLinkedIn,
  GitHub as IconGitHub,
  Facebook as IconFacebook,
} from "react-feather";
import { FlexBox, Typography } from "@phantomthief-react/components";
import { IResponsiveTopnavItem } from "@phantomthief-react/modules";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useMemo } from "react";
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

const LayoutDefault = () => {
  const navigate = useNavigate();

  const topnav = useMemo(
    () => (
      <Styled.Topnav
        firstItemSelectable={false}
        items={topnavItems}
        isStandalone={true}
        activeKey="hello"
        hamburgerProps={{
          color: "#607b96",
        }}
        onClick={(_, key) => {
          navigate(key ? `/${key}` : "/");
        }}
      />
    ),
    [navigate],
  );

  const footer = useMemo(() => {
    return (
      <Styled.Footer>
        <Typography>find me in:</Typography>
        <FlexBox>
          <Link to="">
            <Styled.BottomLink variant="span">
              <IconGitHub />
            </Styled.BottomLink>
          </Link>
          <Link to="">
            <Styled.BottomLink variant="span">
              <IconLinkedIn />
            </Styled.BottomLink>
          </Link>
          <Link to="">
            <Styled.BottomLink variant="span">
              <IconFacebook />
            </Styled.BottomLink>
          </Link>
        </FlexBox>
      </Styled.Footer>
    );
  }, []);

  return (
    <Styled.Container>
      <Styled.InnerContainer>
        {topnav}
        <Styled.Content>
          <Outlet />
        </Styled.Content>
        {footer}
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default LayoutDefault;
