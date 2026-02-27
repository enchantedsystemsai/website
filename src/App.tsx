import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoteCompass from './pages/NoteCompass';
import StudioPrivacy from './pages/StudioPrivacy';
import NoteCompassPrivacy from './pages/NoteCompassPrivacy';
import NoteCompassTerms from './pages/NoteCompassTerms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notecompass" element={<NoteCompass />} />
        <Route path="/privacy" element={<StudioPrivacy />} />
        <Route path="/notecompass/privacy" element={<NoteCompassPrivacy />} />
        <Route path="/notecompass/terms" element={<NoteCompassTerms />} />
      </Routes>
    </Router>
  );
}

export default App;
