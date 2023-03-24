import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <main>Content</main>
      </div>
    </Router>
  )
}

export default App;
