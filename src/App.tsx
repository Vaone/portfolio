import { useState } from 'react'

import { Header } from '@/components/header/Header'
import { About } from '@/pages/about/About'
import { Footer } from '@/pages/footer/Footer'
import { Form } from '@/pages/form/Form'
import { Main } from '@/pages/main/Main'
import { Projects } from '@/pages/projects/Projects'
import { Skills } from '@/pages/skills/Skills'
import { themes } from '@/styles/Theme'
import { ThemeProvider } from 'styled-components'

import { skillItems } from './common/constants'
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
