import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Login from "./Login";
import NoPage from "./nopage";
import Register from "./register";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(<Router />);