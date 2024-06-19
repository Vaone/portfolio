import { Container } from '@/components/Container'
import { styled } from 'styled-components'

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <h2>О себе</h2>
        <span>
          Front-end разработчик владеющий с TypeScript React, Redux (RTK - Query) и другие связанные
          технологии. Разрабатываю SPA и другие сайты более года. Люблю программировать. Постоянно
          совершенствую навыки. Изучаю новые технологии, решаю задачи на codewars и совершенствую
          английский язык. Всегда открыт для новых возможностей и буду рад пообщаться и рассмотреть
          ваши предложения.
        </span>
      </Container>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  & > div {
    padding-left: 20px;
    text-align: justify;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 26px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 22px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      line-height: 20px;
    }
  }

  span {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    position: relative;

    &::after {
      content: '';
      display: flex;
      width: 5px;
      height: 100%;
      background: ${({ theme }) => theme.colors.Primary};
      position: absolute;
      top: 0;
      left: -20px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 22px;
    }
  }

  @media (max-width: 768px) {
    & > div {
      padding-left: 15px;
    }
  }

  @media (max-width: 480px) {
    & > div {
      padding-left: 10px;
    }
  }
`
