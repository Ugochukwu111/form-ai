import SignUpPage from './pages/SignUpPage'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
      </Routes>
  
    </>
  )
}

export default App
