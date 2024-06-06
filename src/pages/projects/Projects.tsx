import workImage from '@/assets/images/work.webp'
import { Container } from '@/components/Container'
import { styled } from 'styled-components'

import { ProjectCard } from './ProjectCard'

const projectItems = [
  {
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    id: 1,
    src: workImage,
    techs: [
      'Javascript',
      'Typescript',
      'React',
      'Redux',
      'Javascript',
      'Typescript',
      'React',
      'Redux',
    ],
    title: 'TITLE PROJECT',
  },
  {
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    id: 2,
    src: workImage,
    techs: ['Javascript', 'React-Native', 'Redux'],
    title: 'Instagram',
  },
  {
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    id: 3,
    src: workImage,
    techs: ['Javascript', 'Typescript', 'React', 'Redux'],
    title: 'TITLE PROJECT',
  },
  {
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    id: 4,
    src: workImage,
    techs: ['Javascript', 'React-Native', 'Redux'],
    title: 'Instagram',
  },
  {
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    id: 5,
    src: workImage,
    techs: ['Javascript', 'Typescript', 'React', 'Redux'],
    title: 'TITLE PROJECT',
  },
]

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <h2>Projects</h2>

        <StyledWrapper>
          {projectItems.map(item => {
            return (
              <ProjectCard
                description={item.description}
                image={item.src}
                key={item.id}
                techs={item.techs}
                title={item.title}
              />
            )
          })}
        </StyledWrapper>
      </Container>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  & > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    & > div {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 28px;
    }
  }
`
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  flex-wrap: wrap;
  gap: 28px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`
