import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import CharactersPage from './pages/CharactersPage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
