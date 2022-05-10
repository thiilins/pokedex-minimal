import React from 'react'
import AppRoutes from './routes/app.routes'
import GlobalStyles from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import usePersistedState from './utils/usePersistedState'
function App() {
  const [theme, setTheme] = usePersistedState('@PK-theme', 'light')
  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyles />
      <Header toogleTheme={toogleTheme} themeName={theme} />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
