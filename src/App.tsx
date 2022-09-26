import { AppStyled } from './app.style'
import { GlobalStyle } from './assets/theme'
import { PagesApp } from './pages'

function App() {

    return <AppStyled>
        <GlobalStyle />
        <PagesApp />
    </AppStyled>
}

export default App
