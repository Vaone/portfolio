import { Button } from '@/components/Button/Button'
import { Container } from '@/components/Container'
import { styled } from 'styled-components'

export const Form = () => {
  return (
    <StyledSectionForm>
      <Container>
        <h2>Text me</h2>
        <StyledForm>
          <StyledInput>
            <StyledInputTitle>Name</StyledInputTitle>
            <StyledBorderWrapper>
              <input placeholder={'Example: Ivan'} type={'text'} />
              <RequiredInput>Input required</RequiredInput>
            </StyledBorderWrapper>
          </StyledInput>
          <StyledInput>
            <StyledInputTitle>Email</StyledInputTitle>
            <StyledBorderWrapper>
              <input placeholder={'Example: ivan@gmail.com'} type={'email'} />
              <RequiredInput>Input required</RequiredInput>
            </StyledBorderWrapper>
          </StyledInput>
          <StyledInput>
            <StyledInputTitle>Message</StyledInputTitle>
            <StyledBorderWrapper id={'textarea'}>
              <textarea placeholder={'Feel free, write everything you want. . .'} />
              <RequiredInput>Input required</RequiredInput>
            </StyledBorderWrapper>
          </StyledInput>
          <StyledInput>
            <Button type={'submit'}>Send</Button>
          </StyledInput>
        </StyledForm>
      </Container>
    </StyledSectionForm>
  )
}

const StyledSectionForm = styled.section`
  height: 550px;
`

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledInputTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  margin: 0 0 6px 0;
`

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 532px;
  position: relative;
  padding: 0 0 15px 0;

  #textarea {
    height: 165px;
  }

  button {
    margin: 20px 0 0 0;
  }
`

const RequiredInput = styled.span`
  position: absolute;
  right: 0;
  bottom: -5px;
  margin: 7px 0 0 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0;
  color: #c05353;
  text-align: right;
  opacity: 1;
`

const StyledBorderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.PrimaryFont};

  width: 532px;
  height: 48px;

  &:focus-within {
    background-image: ${({ theme }) => theme.colors.Primary};
    background: ${({ theme }) => theme.colors.Primary};
  }

  input,
  textarea {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    outline: none;
    padding: 14px 20px;
    resize: none;
    border: none;

    font-family: Montserrat sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0;
    color: ${({ theme }) => theme.colors.PrimaryFont};
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.Background};

    &:not(:placeholder-shown) + ${RequiredInput} {
      opacity: 0;
    }
  }
`
