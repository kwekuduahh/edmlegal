import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import PracticeAreas from "./pages/PracticeAreas";
import Attorneys from "./pages/Attorneys";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/attorneys" element={<Attorneys />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
