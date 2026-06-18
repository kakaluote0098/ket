import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import Learn from '@/pages/Learn';
import Vocabulary from '@/pages/Vocabulary';
import Grammar from '@/pages/Grammar';
import Speaking from '@/pages/Speaking';
import Listening from '@/pages/Listening';
import ExamGuide from '@/pages/ExamGuide';
import ExamTips from '@/pages/ExamTips';
import Review from '@/pages/Review';
import MockExam from '@/pages/MockExam';
import PaperReview from '@/pages/PaperReview';
import HighScorePolish from '@/pages/HighScorePolish';
import Phonics from '@/pages/Phonics';
import VocabularyFoundation from '@/pages/VocabularyFoundation';
import GrammarFoundation from '@/pages/GrammarFoundation';
import SkillsFoundation from '@/pages/SkillsFoundation';
import JuniorEnglish from '@/pages/JuniorEnglish';
import Practice from '@/pages/Practice';
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
        <Route path="/learn/exam-tips" element={<ExamTips />} />
        <Route path="/learn/review" element={<Review />} />
        <Route path="/learn/mock-exam" element={<MockExam />} />
        <Route path="/learn/paper-review" element={<PaperReview />} />
        <Route path="/learn/high-score" element={<HighScorePolish />} />
        <Route path="/learn/phonics" element={<Phonics />} />
        <Route path="/learn/vocabulary-foundation" element={<VocabularyFoundation />} />
        <Route path="/learn/grammar-foundation" element={<GrammarFoundation />} />
        <Route path="/learn/skills-foundation" element={<SkillsFoundation />} />
        <Route path="/junior-english" element={<JuniorEnglish />} />
        <Route path="/learn/practice" element={<Practice />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/path" element={<MyPath />} />
      </Routes>
    </Router>
  );
}
