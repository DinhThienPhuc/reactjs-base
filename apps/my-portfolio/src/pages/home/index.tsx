import { Link } from "react-router-dom";

import { FlexBox, Icon, Typography } from "@phantompurr-react/components";

import Styled from "./style";

const PageHome = () => {
  return (
    <Styled.Container>
      <div>
        <Typography color="#e5e9f0" size={18}>
          Hi all. I am
        </Typography>
        <Styled.Name variant="h1" color="#e5e9f0" size={62}>
          DINH THIEN PHUC
        </Styled.Name>
        <Styled.Role variant="h2" color="#43d9ad" size={20}>
          <Icon name="chevron-right" />
          <Styled.RoleText>Front-end developer</Styled.RoleText>
        </Styled.Role>
      </div>
      <div>
        <Styled.FindMe color="#607b96" size={14}>
          {"// find my profile on Github:"}
        </Styled.FindMe>
        <FlexBox gap="8px" wrap="wrap" justifyContent="flex-start">
          <Typography color="#4d5bce" size={14} bold={500}>
            const
          </Typography>
          <Typography color="#43d9ad" size={14} bold={500}>
            githubLink
          </Typography>
          <Typography color="#ffffff" size={14} bold={500}>
            {"="}
          </Typography>
          <Link to="https://github.com/DinhThienPhuc" target="_blank">
            <Typography color="#e99287" size={14} bold={500}>
              “https://github.com/DinhThienPhuc”
            </Typography>
          </Link>
        </FlexBox>
      </div>
    </Styled.Container>
  );
};

export default PageHome;
