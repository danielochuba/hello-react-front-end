import './App.css'
import Message from './components/greeting'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/messages" element={<Message />} />
    </Routes>
  </Router>
  )
}

export default App
