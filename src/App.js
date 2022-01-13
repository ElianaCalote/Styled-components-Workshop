import styled from "styled-components"
import {Title} from "./components/Title"
import Link from "./components/Link"

function App() {
  return (
    <StyledApp>
      <Title>Hello World</Title>
      <h2>Hello Eliana</h2>
      <Link text ={"link1"} site={"https://www.google.com"}/>
      <Link text={"link2"}/>
      <Link/>
      <Link/>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.main`
background-color: red;
  h2{
    color: white;
  }
`

