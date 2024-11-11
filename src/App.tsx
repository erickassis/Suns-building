import Header from "./components/Header";
import Footer from "./components/Footer";
import Principal from "./components/Principal";
import Autenticar from "./pages/Autenticar";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Autenticar />
      <hr />
      <Login />
      <Header />
      <Principal />
      <Footer />   
    </>
  )
}

