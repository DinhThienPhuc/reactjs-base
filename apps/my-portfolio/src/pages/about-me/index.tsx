import { Icon } from "@phantomthief-react/components";
import { IAccordionItemProps } from "@phantomthief-react/modules";

import { CommonStyled } from "../../styles";
import { ContactForm } from "./contact-form";
import { FindMeAt } from "./find-me-at";
import Styled from "./style";

const items: IAccordionItemProps[] = [
  {
    key: "overview",
    preIcon: <Icon name="contact" width={16} height={16} />,
    label: "overview",
    body: <ContactForm />,
  },
  {
    key: "skills",
    preIcon: <Icon name="user-search" width={16} height={16} />,
    label: "skills",
    body: <FindMeAt />,
  },
  {
    key: "skills",
    preIcon: <Icon name="user-search" width={16} height={16} />,
    label: "skills",
    body: <FindMeAt />,
  },
  {
    key: "skills",
    preIcon: <Icon name="user-search" width={16} height={16} />,
    label: "skills",
    body: <FindMeAt />,
  },
  {
    key: "skills",
    preIcon: <Icon name="user-search" width={16} height={16} />,
    label: "skills",
    body: <FindMeAt />,
  },
];

const PageContacMe = () => {
  return (
    <>
      <CommonStyled.PageName variant="h1" size={14} bold={400}>
        _contact-me
      </CommonStyled.PageName>
      <Styled.Sections items={items} />
    </>
  );
};

export default PageContacMe;
