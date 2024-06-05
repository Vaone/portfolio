import sprite from '@/assets/images/sprite-socials.svg'
import { styled } from 'styled-components'

type SocialLinkPropsType = {
  height?: number
  iconId: string
  svg?: string
  title: string
  viewBox?: string
  width?: number
}

export const SocialLink = (props: SocialLinkPropsType) => {
  const { height, iconId, title, viewBox, width } = props

  return (
    <StyledSocialLink href={'#'}>
      <StyledWrapper>
        <svg
          fill={'none'}
          height={height || '38'}
          viewBox={viewBox || '0 0 38 38'}
          width={width || '38'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <use xlinkHref={`${sprite}#${iconId}`} />
        </svg>
      </StyledWrapper>

      <span>{title}</span>
    </StyledSocialLink>
  )
}

const StyledSocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.PrimaryFont};

  span {
    text-transform: uppercase;
  }
`
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.Primary};
  margin: 0 0 10px 0;

  svg {
    fill: ${({ theme }) => theme.colors.Background};
  }
`
