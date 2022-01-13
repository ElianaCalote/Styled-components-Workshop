import styled from "styled-components"

const Link = ({text,site}) => {
    
  return (
    <StyledLink  href={site} >
{text}
    </StyledLink>
  )
}


export default Link

const StyledLink = styled.a`
background: blue
`