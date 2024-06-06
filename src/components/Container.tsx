import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  margin: 100px auto 0 auto;

  @media (max-width: 1200px) {
    max-width: 900px;
    padding: 0 20px;
  }

  @media (max-width: 992px) {
    max-width: 700px;
    padding: 0 25px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 30px;
  }

  @media (max-width: 576px) {
    margin: 50px auto 0 auto;
    padding: 0 20px;
  }
`
