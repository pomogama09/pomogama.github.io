import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProjectGrid from './components/ProjectGrid'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Shraddha's Makerspace Profile</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProjectGrid />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
