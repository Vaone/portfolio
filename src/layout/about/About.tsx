import { Container } from '@/components/Container'
import { styled } from 'styled-components'

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <h2>About Me</h2>
        <span>
          The long barrow was built on land previously inhabited in the Mesolithic period. It
          consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet)
          in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and
          cremated human remains were placed within this chamber during the Neolithic period,
          representing at least nine or ten individuals.
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
  }
`
