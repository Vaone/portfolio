import { useState } from 'react'

import { themes } from '@/styles/Theme'
import { ThemeProvider } from 'styled-components'

import { skillItems } from './common/constants'
import { About } from './layout/about/About'
import { Footer } from './layout/footer/Footer'
import { Form } from './layout/form/Form'
import { Header } from './layout/header/Header'
import { Main } from './layout/main/Main'
import { Projects } from './layout/projects/Projects'
import { Skills } from './layout/skills/Skills'
import { GlobalStyle } from './styles/Global.styled'

function App() {
  const [themeIndex, setThemeIndex] = useState<number>(0)

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <div className={'App'}>
        <div className={'wrapper'}>
          <Header onThemeChange={setThemeIndex} />
          <Main />
          <About />
          <Projects />
          <Skills SkillItems={skillItems} />
          <Form />
          <Footer />
        </div>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  )
}

export default App
