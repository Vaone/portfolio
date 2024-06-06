import { Dispatch, SetStateAction, useState } from 'react'

import { Container } from '@/components/Container'
import { NavLinks } from '@/components/nav/NabLinks'
import { NavigationMenu } from '@/components/nav/Nav'
import { NavButton } from '@/components/nav/NavButton'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { styled } from 'styled-components'

type Props = {
  onThemeChange: Dispatch<SetStateAction<number>>
}

export const Header = ({ onThemeChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isSmallScreen = useMediaQuery('(max-width: 768px)')

  return (
    <StyledHeader>
      <Container>
        <StyledLinkHome>Home</StyledLinkHome>
        <StyledNav>
          {isSmallScreen ? (
            <>
              <NavButton onClick={toggleMenu} />
              <NavigationMenu isOpen={isOpen} onClose={toggleMenu} onThemeChange={onThemeChange} />
            </>
          ) : (
            <NavLinks onThemeChange={onThemeChange} />
          )}
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
  z-index: 2;
  box-shadow: 0 0 25px 2px ${({ theme }) => theme.colors.primaryFont};

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    margin-top: 0;

    @media (max-width: 768px) {
      height: 60px;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      height: auto;
      padding: 10px;
    }
  }
`
const StyledNav = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

const StyledLinkHome = styled.a`
  cursor: pointer;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`
