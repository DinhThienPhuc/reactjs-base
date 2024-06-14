import {
  Facebook as IconFacebook,
  GitHub as IconGitHub,
  Linkedin as IconLinkedIn,
} from "react-feather";
import { FlexBox, Typography } from "@phantomthief-react/components";
import { Link, Outlet } from "react-router-dom";
import Topnav from "./topnav";
import Styled from "./style";

const LayoutDefault = () => {
  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <Topnav />
        <Styled.Content>
          <Outlet />
        </Styled.Content>
        <Styled.Footer>
          <Typography>find me in:</Typography>
          <FlexBox>
            <Link to="https://github.com/DinhThienPhuc" target="_blank">
              <Styled.BottomLink variant="span">
                <IconGitHub />
              </Styled.BottomLink>
            </Link>
            <Link to="/" target="_blank">
              <Styled.BottomLink variant="span">
                <IconLinkedIn />
              </Styled.BottomLink>
            </Link>
            <Link to="/" target="_blank">
              <Styled.BottomLink variant="span">
                <IconFacebook />
              </Styled.BottomLink>
            </Link>
          </FlexBox>
        </Styled.Footer>
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default LayoutDefault;
