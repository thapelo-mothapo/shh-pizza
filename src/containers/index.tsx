import NavBar from "./Navigation";
import Footer from "./Footer";

import { Wrapper } from "./styles";
import styled from "styled-components";

const Main = styled.main`
  border: 1px solid red;
  height: 480px;
`;

const LandingPage: React.FC = () => {
  return (
    <Wrapper>
      <NavBar />
      <Main>Content</Main>

      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
