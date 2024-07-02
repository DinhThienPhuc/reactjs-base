import { FlexBox, Icon } from "@phantomthief-react/components";
import { Link } from "react-router-dom";
import { Styled } from "./style";

export const FindMeAt = () => {
  return (
    <FlexBox flexDirection="column" alignItems="flex-start" gap="10px">
      <Link to="https://codedaihiep.wordpress.com/" target="_blank">
        <Styled.ExternalLink color="#607b96" size={16}>
          <Icon width={20} height={20} name="external-link" />
          Facebook
        </Styled.ExternalLink>
      </Link>
      <Link to="https://codedaihiep.wordpress.com/" target="_blank">
        <Styled.ExternalLink color="#607b96" size={16}>
          <Icon width={20} height={20} name="external-link" />
          Instagram
        </Styled.ExternalLink>
      </Link>
      <Link to="https://codedaihiep.wordpress.com/" target="_blank">
        <Styled.ExternalLink color="#607b96" size={16}>
          <Icon width={20} height={20} name="external-link" />
          Tiktok
        </Styled.ExternalLink>
      </Link>
      <Link to="https://codedaihiep.wordpress.com/" target="_blank">
        <Styled.ExternalLink color="#607b96" size={16}>
          <Icon width={20} height={20} name="external-link" />
          Zalo
        </Styled.ExternalLink>
      </Link>
    </FlexBox>
  );
};
