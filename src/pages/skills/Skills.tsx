import { Container } from '@/components/Container'
import { styled } from 'styled-components'

import { Skill } from './Skill'

export const Skills = (props: { SkillItems: { icon: string; title: string }[] }) => {
  return (
    <section>
      <Container>
        <h2>Skills</h2>
        <StyledContentWrapper>
          {props.SkillItems.map(item => {
            switch (item.icon) {
              case 'mongo':
                return (
                  <Skill
                    iconId={item.icon}
                    key={item.icon}
                    title={item.title}
                    viewBox={'-30 0 120 120'}
                  />
                )
              case 'git':
                return (
                  <Skill
                    iconId={item.icon}
                    key={item.icon}
                    title={item.title}
                    viewBox={'-5 -5 100 100'}
                  />
                )
              default:
                return <Skill iconId={item.icon} key={item.icon} title={item.title} />
            }
          })}
        </StyledContentWrapper>
      </Container>
    </section>
  )
}

const StyledContentWrapper = styled.div`
  margin: 30px 0 0 0;
  display: grid;
  grid-template-columns: repeat(5, 120px);
  grid-auto-rows: minmax(164px, auto);
  align-content: center;
  gap: 60px 120px;

  & div:nth-child(11) {
    grid-column: 2/3;
    text-align: center;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 120px);
    gap: 50px 100px;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 120px);
    gap: 40px 80px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 120px);
    gap: 30px 60px;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 120px);
    gap: 20px 40px;
  }
`
