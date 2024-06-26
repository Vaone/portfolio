import { forwardRef } from 'react'

import arrow from '@/assets/images/arrow.svg'
import heroWebp from '@/assets/images/welcomepage.webp'
import { Button } from '@/components/Button/Button'
import { Container } from '@/components/Container'
import { useMedia } from '@/hooks/useMedia'
import { styled } from 'styled-components'

type Props = {}

export const Main = forwardRef<HTMLDivElement, Props>((_, ref) => {
  const { isTabletScreen } = useMedia()

  return (
    <StyledMain ref={ref}>
      <Container>
        <StyledLeftSide>
          <h1>Frontend Developer</h1>
          <h2>Kim Vladimir</h2>
          <span></span>
          <Button>Contact Me</Button>
        </StyledLeftSide>
        <StyledRightSide>
          <img alt={'backgroundImage'} src={heroWebp} />
        </StyledRightSide>
        {!isTabletScreen && (
          <StyledArrowImage>
            <svg
              fill={'currentColor'}
              height={'32'}
              viewBox={'0 0 32 32'}
              width={'32'}
              xmlns={'http://www.w3.org/2000/svg'}
            >
              <use xlinkHref={`${arrow}#arrow`} />
            </svg>
          </StyledArrowImage>
        )}
      </Container>
    </StyledMain>
  )
})

const StyledMain = styled.section`
  height: 750px;

  @media (max-width: 768px) {
    height: auto;
  }

  & > div {
    display: flex;
    position: relative;

    @media (max-width: 650px) {
      flex-direction: column;
    }
  }
`

const StyledArrowImage = styled.div`
  position: absolute;
  right: 50%;
  bottom: 0;

  svg {
    fill: ${({ theme }) => theme.colors.Primary};
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: 20px;
  }
`

const StyledLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  h1 {
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    color: ${({ theme }) => theme.colors.PrimaryFont};
    margin-bottom: 10px;
  }

  h2 {
    background: ${({ theme }) => theme.colors.Primary};
    color: ${({ theme }) => theme.colors.PrimaryFont};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: table;

    font-size: 72px;
    font-weight: 600;
    line-height: 88px;
    margin-bottom: 10px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 30px;
  }

  button {
    width: 135px;
  }

  @media (min-width: 768px) {
    width: 50%;
    text-align: left;
    padding: 0;

    h2 {
      font-size: 72px;
      line-height: 88px;
    }
  }
`

const StyledRightSide = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    width: 50%;
    padding: 0;
  }
`
