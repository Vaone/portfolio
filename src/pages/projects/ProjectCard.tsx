import { Button } from '@/components/Button/Button'
import { styled } from 'styled-components'

type ProjectCardPropsType = {
  description: string
  image: string
  link: string
  techs: string[]
  title: string
}

export const ProjectCard = (props: ProjectCardPropsType) => {
  return (
    <StyledCard>
      <a href={props.link}>
        <img alt={props.title} src={props.image} />
      </a>
      <StyledContentCard>
        <StyledCardTitle>{props.title}</StyledCardTitle>
        <StyledCardTechs>
          {props.techs.map((tech, index) => {
            return <Button key={index}>{tech}</Button>
          })}
        </StyledCardTechs>
        <StyledCardDescription>{props.description}</StyledCardDescription>
      </StyledContentCard>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.CardBackground};
  width: 30em;
  overflow: hidden;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.15);

  img {
    height: 24em;
  }

  @media (max-width: 768px) {
    width: 100%;
    img {
      height: auto;
    }
  }
`
const StyledContentCard = styled.div`
  margin: 0 26px;

  @media (max-width: 768px) {
    margin: 0 16px;
  }
`
const StyledCardTitle = styled.div`
  text-transform: uppercase;
  margin: 30px 0 0 0;

  @media (max-width: 768px) {
    margin: 20px 0 0 0;
    font-size: 1.2em;
  }
`
const StyledCardTechs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;

  button {
    text-transform: uppercase;
    padding: 8px 16px;
    cursor: default;

    @media (max-width: 768px) {
      padding: 6px 12px;
      font-size: 0.9em;
    }
  }
`

const StyledCardDescription = styled.div`
  margin: 20px 0 30px 0;
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 768px) {
    margin: 15px 0 20px 0;
    font-size: 0.9em;
  }
`
