import { styled } from 'styled-components'

type Props = {
  onClick: () => void
}

export const NavButton = ({ onClick }: Props) => (
  <StyledNavButton aria-label={'Toggle Menu'} id={'menu-toggle'} onClick={onClick}>
    <Line />
    <Line />
    <Line />
  </StyledNavButton>
)

const StyledNavButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const Line = styled.span`
  display: block;
  width: 25px;
  height: 2px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.PrimaryFont};
  transition: transform 0.3s ease;
`
