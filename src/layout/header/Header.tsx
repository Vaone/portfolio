import { Dispatch, SetStateAction } from 'react'

import { Button } from '@/components/Button/Button'
import { Container } from '@/components/Container'
import { themes } from '@/styles/Theme'
import { styled } from 'styled-components'

type Props = {
  onThemeChange: Dispatch<SetStateAction<number>>
}

export const Header = (props: Props) => {
  const { onThemeChange } = props

  const onThemeHandler = () => {
    onThemeChange(prevIndex => (prevIndex + 1) % themes.length)
  }

  return (
    <StyledHeader>
      <Container>
        <StyledLinkHome>Home</StyledLinkHome>
        <StyledNav>
          <StyledLink>Projects</StyledLink>
          <StyledLink>Contact</StyledLink>
          <Button className={'link'} onClick={onThemeHandler}>
            Theme Changer
          </Button>
        </StyledNav>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.Background};
  z-index: 999;
  box-shadow: 0 0 25px 2px ${({ theme }) => theme.colors.primaryFont};

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    margin-top: 0;
  }
`
const StyledNav = styled.nav`
  display: flex;
`

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 80px;
  cursor: pointer;
  border-radius: 6px;
  padding: 12px 20px;
  transition:
    background linear 0.2s,
    color linear 0.2s;

  &:last-child {
    border: 1px solid ${({ theme }) => theme.colors.Primary};
    padding: 10px;
    border-radius: 5px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.Primary};
    color: ${({ theme }) => theme.colors.SecondaryFont};
  }
`
const StyledLinkHome = styled.a`
  cursor: pointer;
`
