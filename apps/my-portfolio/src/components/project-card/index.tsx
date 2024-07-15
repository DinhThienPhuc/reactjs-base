import { Typography } from "@phantomthief-react/components";

import { CustomButton } from "../custom-button";
import { Styled } from "./style";
import { IProjectCardProps } from "./types";

export const ProjectCard = ({
  name,
  label,
  description,
  previewImage,
}: IProjectCardProps) => (
  <Styled.Container>
    <div>
      <Typography color="#5565e8">{label} </Typography>
      <Typography color="#607b96">/ {name}</Typography>
    </div>
    <Styled.InnerContainer>
      <Styled.Preview>
        <img src={previewImage} alt={`project-${name}`} />
      </Styled.Preview>
      <Styled.Details
        variant="div"
        gap="24px"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Typography color="#607b96">{description}</Typography>
        <CustomButton>view-project</CustomButton>
      </Styled.Details>
    </Styled.InnerContainer>
  </Styled.Container>
);
