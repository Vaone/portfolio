import sprite from '@/assets/images/sprite-skills.svg'
import { styled } from 'styled-components'

type SkillPropsType = {
  height?: number
  iconId: string
  title: string
  viewBox?: string
  width?: number
}

export const Skill = (props: SkillPropsType) => {
  const { height, iconId, title, viewBox, width } = props

  return (
    <StyledSkill>
      <svg
        fill={'none'}
        height={height || '120'}
        viewBox={viewBox || '0 0 120 120'}
        width={width || '120'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <use xlinkHref={`${sprite}#${iconId}`} />
      </svg>
      <span>{title}</span>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    margin-bottom: 22px;
  }

  span {
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    svg {
      width: 120px; /* larger width for larger screens */
      height: 120px; /* larger height for larger screens */
    }

    span {
      font-size: 16px; /* larger font size for larger screens */
    }
  }
`
