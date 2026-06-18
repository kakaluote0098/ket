import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import Learn from '@/pages/Learn';
import Vocabulary from '@/pages/Vocabulary';
import Grammar from '@/pages/Grammar';
import Speaking from '@/pages/Speaking';
import Listening from '@/pages/Listening';
import ExamGuide from '@/pages/ExamGuide';
import Progress from '@/pages/Progress';
import MyPath from '@/pages/MyPath';
import UnitDetail from '@/pages/UnitDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:unitId" element={<UnitDetail />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/vocabulary" element={<Vocabulary />} />
        <Route path="/learn/grammar" element={<Grammar />} />
        <Route path="/learn/speaking" element={<Speaking />} />
        <Route path="/learn/listening" element={<Listening />} />
        <Route path="/learn/exam" element={<ExamGuide />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/path" element={<MyPath />} />
      </Routes>
    </Router>
  );
}
