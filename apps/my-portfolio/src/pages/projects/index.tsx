import { IAccordionItemProps } from "@phantomthief-react/modules";
import { Icon } from "@phantomthief-react/components";
import { ContactForm } from "./contact-form";
import { CommonStyled } from "../../styles";
import { FindMeAt } from "./find-me-at";
import Styled from "./style";

const items: IAccordionItemProps[] = [
  {
    key: "react-base",
    preIcon: <Icon name="react-js" width={16} height={16} />,
    label: "React Base",
    body: <ContactForm />,
  },
  {
    key: "mine-sweeper-web-game",
    preIcon: <Icon name="bomb" width={16} height={16} />,
    label: "Mine Sweeper web game",
    body: <FindMeAt />,
  },
  {
    key: "pwa-splash-generator",
    preIcon: <Icon name="script" width={16} height={16} />,
    label: "PWA Splash generator",
    body: <FindMeAt />,
  },
  {
    key: "sudoku-solver",
    preIcon: <Icon name="script" width={16} height={16} />,
    label: "Sudoku Solver",
    body: <FindMeAt />,
  },
];

const PageContacMe = () => {
  return (
    <>
      <CommonStyled.PageName variant="h1" size={14} bold={400}>
        _projects
      </CommonStyled.PageName>
      <Styled.Sections items={items} />
    </>
  );
};

export default PageContacMe;
