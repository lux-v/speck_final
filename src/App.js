
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Lectures from './pages/Lecture/Lectures';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/lectures" />} />
        <Route path="/lectures" element={<Lectures />} />
      </Routes>
    </Router>
  )
}

export default App;
