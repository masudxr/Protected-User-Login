import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NavBar from "./components/navBar";
import NoPage from "./pages/noPage";
import LoginForm from "./components/login";
import Protected from "./components/protected";

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>

          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about" element={<Protected Component={About} />} />
          <Route path="/contact" element={<Protected Component={Contact} />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;