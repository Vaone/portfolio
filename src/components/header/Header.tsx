import { Dispatch, RefObject, SetStateAction, useState } from 'react'

import { Container } from '@/components/Container'
import { NavLinks } from '@/components/nav/NabLinks'
import { NavigationMenu } from '@/components/nav/Nav'
import { NavButton } from '@/components/nav/NavButton'
import { useMedia } from '@/hooks/useMedia'
import { styled } from 'styled-components'

type Props = {
  onThemeChange: Dispatch<SetStateAction<number>>
  projectRef: RefObject<HTMLDivElement>
}

export const Header = ({ onThemeChange, projectRef }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const { isTabletScreen } = useMedia()

  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          {isTabletScreen ? (
            <>
              <NavButton onClick={toggleMenu} />
              <NavigationMenu
                isOpen={isOpen}
                onClose={toggleMenu}
                onThemeChange={onThemeChange}
                projectRef={projectRef}
              />
            </>
          ) : (
            <NavLinks onThemeChange={onThemeChange} projectRef={projectRef} />
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
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-top: 0;

    @media (max-width: 768px) {
      height: 60px;
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
