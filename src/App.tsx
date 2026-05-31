import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './routes/Landing';
import Story from './routes/Story';
import Provenance from './routes/Provenance';
import OliveSchool from './routes/OliveSchool';
import Roots from './routes/Roots';
import Waitlist from './routes/Waitlist';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/story" element={<Story />} />
        <Route path="/provenance" element={<Provenance />} />
        <Route path="/olive-school" element={<OliveSchool />} />
        <Route path="/roots" element={<Roots />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </BrowserRouter>
  );
}
