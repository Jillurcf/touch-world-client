
import Slider from '../Slider/Slider';
import CountryCategory from './CountryCategory';
import PlaceOfEmployment from './PlaceOfEmployment';
import WhoWeAre from './WhoWeAre';

const Home = () => {
    return (
        <div>
          
            <Slider></Slider>
            <CountryCategory></CountryCategory>
            <WhoWeAre></WhoWeAre>
            <PlaceOfEmployment></PlaceOfEmployment>
        </div>
    );
};

export default Home;