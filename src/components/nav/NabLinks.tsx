import { Dispatch, SetStateAction } from 'react'

import { Button } from '@/components/Button/Button'
import { themes } from '@/styles/Theme'
import { styled } from 'styled-components'

type Props = {
  onThemeChange: Dispatch<SetStateAction<number>>
}

export const NavLinks = ({ onThemeChange }: Props) => {
  const onThemeHandler = () => {
    onThemeChange(prevIndex => (prevIndex + 1) % themes.length)
  }

  return (
    <>
      <StyledLink>Projects</StyledLink>
      <StyledLink>Contact</StyledLink>
      <Button onClick={onThemeHandler}>Theme Changer</Button>
    </>
  )
}

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 80px;
  cursor: pointer;
  border-radius: 6px;
  padding: 12px 20px;
  text-align: center;
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

  @media (max-width: 768px) {
    margin-right: 40px;
  }

  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 10px;
    width: 100%;
    justify-content: center;
  }
`
