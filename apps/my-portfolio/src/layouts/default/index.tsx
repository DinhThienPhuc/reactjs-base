import { Link, Outlet } from "react-router-dom";

import { FlexBox, Icon, Typography } from "@phantompurr-react/components";

import Styled from "./style";
import Topnav from "./topnav";

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
                <Icon name="git-hub" />
              </Styled.BottomLink>
            </Link>
            <Link to="/" target="_blank">
              <Styled.BottomLink variant="span">
                <Icon name="linked-in" />
              </Styled.BottomLink>
            </Link>
            <Link to="/" target="_blank">
              <Styled.BottomLink variant="span">
                <Icon name="upwork" />
              </Styled.BottomLink>
            </Link>
            <Link to="/" target="_blank">
              <Styled.BottomLink variant="span">
                <Icon name="rss" />
              </Styled.BottomLink>
            </Link>
          </FlexBox>
        </Styled.Footer>
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default LayoutDefault;
