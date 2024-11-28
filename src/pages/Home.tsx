import CardBrand from '../components/CardBrand';  
import CardsTopicos from '../components/CardsTopicos';
import CardBioArquitetura from '../components/CardBioArquitetura';
import CardEdificio from '../components/CardEdificio';
import CardSmartCities from '../components/CardSmartCities';
import CardEnergiaRenovaveis from '../components/CardEnergiaRenovaveis';
import CardIcones from '../components/CardIcones';

const Home = () => {
  return (
    <div>
      <CardBrand /> 
      <CardsTopicos/>
      <CardBioArquitetura/>
      <CardEdificio/>
      <CardSmartCities/>
      <CardEnergiaRenovaveis/>
      <CardIcones/>
    </div>
  );
};

export default Home;