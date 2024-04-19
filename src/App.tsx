import { ThemeProvider } from 'styled-components'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import varTheme from './containers/theme/style'

import './global.css'

function App() {
  return (
    <ThemeProvider theme={varTheme}>
      <Cabecalho />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
