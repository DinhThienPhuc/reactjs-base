import Styled from "./index.style";
import { reload } from "@phantomthief/react-mui.utils";

const Home = () => {
  return (
    <Styled.Container>
      <p>Home page</p>
      <p>App name: {process.env.REACT_APP_NAME}</p>
      <button onClick={reload}>Reload</button>
    </Styled.Container>
  );
};

export default Home;
