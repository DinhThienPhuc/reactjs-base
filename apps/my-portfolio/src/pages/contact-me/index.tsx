import { IAccordionItemProps } from "@phantomthief-react/modules";
import { Icon } from "@phantomthief-react/components";
import { ContactForm } from "./contact-form";
import { CommonStyled } from "../../styles";
import { FindMeAt } from "./find-me-at";
import Styled from "./style";

const items: IAccordionItemProps[] = [
  {
    key: "contacts",
    preIcon: <Icon name="contact" width={16} height={16} />,
    label: "contacts",
    body: <ContactForm />,
  },
  {
    key: "find-me-also-in",
    preIcon: <Icon name="user-search" width={16} height={16} />,
    label: "find-me-also-in",
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
