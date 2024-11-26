import Header from "./components/Header";
import Footer from "./components/Footer";
import Principal from "./components/Principal";
import Autenticar from "./pages/Autenticar";
import Login from "./pages/Login";

//Componentes
import CardBrand from "./components/CardBrand";
import CardsTopicos from "./components/CardsTopicos";
import CardBioArquitetura from "./components/CardBioArquitetura";
import CardEdificio from "./components/CardEdificio";
import CardSmartCities from "./components/CardSmartCities";
import CardEnergiaRenovaveis from "./components/CardEnergiaRenovaveis";
import CardIcones from "./components/CardIcones";

export default function App() {
  return (
    <>
      <Header />
      <CardBrand></CardBrand>
      <CardsTopicos></CardsTopicos>
      <CardBioArquitetura></CardBioArquitetura>
      <CardEdificio></CardEdificio>
      <CardSmartCities></CardSmartCities>
      <CardEnergiaRenovaveis></CardEnergiaRenovaveis>
      <CardIcones></CardIcones>
    </>
  )
}

