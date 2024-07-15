import { FlexBox } from "@phantomthief-react/components";

import { ProjectCard } from "../../components/project-card";
import { CommonStyled } from "../../styles";

const PageContacMe = () => {
  return (
    <>
      <CommonStyled.PageName variant="h1" size={14} bold={400}>
        _projects
      </CommonStyled.PageName>
      <FlexBox flexDirection="column" gap="32px">
        <ProjectCard
          label="Project 1"
          name="React.js Base Template"
          description="Lorem impluse dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris."
          previewImage="https://dinhthienphuc.github.io/assets/images/reactjs-base.jpg"
        />
        <ProjectCard
          label="Project 2"
          name="Mine Sweeper"
          description="Lorem impluse dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris."
          previewImage="https://dinhthienphuc.github.io/assets/images/reactjs-base.jpg"
        />
        <ProjectCard
          label="Project 3"
          name="Sudoku Solver"
          description="Lorem impluse dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris."
          previewImage="https://dinhthienphuc.github.io/assets/images/reactjs-base.jpg"
        />
        <ProjectCard
          label="Project 4"
          name="PWA Splash Generator"
          description="Lorem impluse dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris."
          previewImage="https://dinhthienphuc.github.io/assets/images/reactjs-base.jpg"
        />
      </FlexBox>
    </>
  );
};

export default PageContacMe;
