import { Button } from '@/components/Button/Button'
import { styled } from 'styled-components'

type ProjectCardPropsType = {
  description: string
  image: string
  techs: string[]
  title: string
}

export const ProjectCard = (props: ProjectCardPropsType) => {
  return (
    <StyledCard>
      <img alt={props.title} src={props.image} />
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
`
const StyledContentCard = styled.div`
  margin: 0 26px;
`
const StyledCardTitle = styled.div`
  text-transform: uppercase;
  margin: 30px 0 0 0;
`
const StyledCardTechs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;

  button {
    text-transform: uppercase;
    padding: 8px 16px;
  }
`
const StyledCardDescription = styled.div`
  margin: 20px 0 30px 0;
  font-weight: 400;
  line-height: 24px;
`