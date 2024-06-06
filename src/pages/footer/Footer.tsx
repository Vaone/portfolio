import { Container } from '@/components/Container'
import { styled } from 'styled-components'

import { SocialLink } from './SocialLink'

const socials = [
  { iconId: 'email', title: 'gmail' },
  { iconId: 'git', title: 'github' },
  { iconId: 'linkedin', title: 'linkedin' },
]

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledSocialsWrapper>
          {socials.map(link => {
            switch (link.iconId) {
              case 'email':
                return (
                  <SocialLink
                    height={18}
                    iconId={link.iconId}
                    key={link.iconId}
                    title={link.title}
                    viewBox={'0 0 25 18'}
                    width={25}
                  />
                )
              case 'git':
                return (
                  <SocialLink
                    height={96}
                    iconId={link.iconId}
                    key={link.iconId}
                    title={link.title}
                    viewBox={'0 0 98 96'}
                    width={98}
                  />
                )
              case 'linkedin':
                return (
                  <SocialLink
                    height={22}
                    iconId={link.iconId}
                    key={link.iconId}
                    title={link.title}
                    viewBox={'0 0 22 22'}
                    width={22}
                  />
                )
              default:
                return <SocialLink iconId={link.iconId} key={link.iconId} title={link.title} />
            }
          })}
        </StyledSocialsWrapper>

        <StyledLinksWrapper>
          <a href={'#'}>Projects</a>
          <a href={'#'}>Contacts</a>
        </StyledLinksWrapper>
        <div>
          <h2>Web Developer</h2>
        </div>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 490px;
    margin-top: 0;

    @media (max-width: 768px) {
      height: auto;
      padding: 20px;
    }
  }
`
const StyledSocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 73px;
  margin: 0 0 50px 0;

  @media (max-width: 768px) {
    gap: 40px;
    margin: 0 0 30px 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
    margin: 0 0 20px 0;
  }
`

const StyledLinksWrapper = styled.div`
  display: flex;
  gap: 48px;
  margin: 0 0 50px 0;

  a {
    color: ${({ theme }) => theme.colors.PrimaryFont};
  }

  @media (max-width: 768px) {
    gap: 24px;
    margin: 0 0 30px 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
    margin: 0 0 20px 0;
  }
`
