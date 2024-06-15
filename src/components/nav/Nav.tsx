import { Dispatch, RefObject, SetStateAction } from 'react'

import { NavLinks } from '@/components/nav/NabLinks'
import { styled } from 'styled-components'

type Props = {
  isOpen: boolean
  onClose: () => void
  onThemeChange: Dispatch<SetStateAction<number>>
  projectRef: RefObject<HTMLDivElement>
}

export const NavigationMenu = ({ isOpen, onClose, onThemeChange, projectRef }: Props) => {
  return (
    <StyledNav isOpen={isOpen}>
      <NavLinks onThemeChange={onThemeChange} projectRef={projectRef} />
      <CloseButton onClick={onClose} />
    </StyledNav>
  )
}

const StyledNav = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.Background};
  z-index: 999;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    width: auto;
    padding: 20px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.PrimaryFont};
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
