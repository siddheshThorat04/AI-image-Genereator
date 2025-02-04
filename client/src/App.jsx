import styled, { ThemeProvider} from 'styled-components'
import { darkTheme } from './utils/Themes'
import CreatePost from './components/CreatePost'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  overflow: hidden;
  transition: all 0.5s ease;
`
const Wraper = styled.div`
 height: 100%;
 position:relative;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 flex:3;
`

function App() { 
  return (
    <ThemeProvider  theme={darkTheme} >
      <Container>
        <Wraper>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}  ></Route>
          <Route path="/createPost" element={<CreatePost/>}  ></Route>
          </Routes>
          </BrowserRouter>
        </Wraper>
      </Container>
    </ThemeProvider>
  )
}

export default App
