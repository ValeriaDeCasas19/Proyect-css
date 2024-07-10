import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner  from "./components/Banner"
import banner from "./assets/banner.png"


const FondoGradiente = styled.div`
background: linear-gradient(172deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`
const AppContainer = styled.div `
width: 1280px;
max-width: 100%;
margin: 0 auto;
`

function App() {
  

  return (
    <>
    <FondoGradiente>
      <GlobalStyles/>
      <Cabecera/>
      <AppContainer>
      <BarraLateral/>
      <Banner texto ="La galeria mas completa de fotos del espacio"
      backgroundImage={banner}/>
      </AppContainer>
    </FondoGradiente>
    </>
  )
}

export default App
