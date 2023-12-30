
import Slider from '../Slider/Slider';
import CountryCategory from './CountryCategory';
import MemerShip from './MemerShip';
import OurPartners from './OurPartners';
import OurSucees from './OurSucees';
import PlaceOfEmployment from './PlaceOfEmployment';
import WhoWeAre from './WhoWeAre';

const Home = () => {
    return (
        <div>
          
            <Slider></Slider>
            <CountryCategory></CountryCategory>
            <WhoWeAre></WhoWeAre>
            <PlaceOfEmployment></PlaceOfEmployment>
            <OurPartners></OurPartners>
            <MemerShip></MemerShip>
            <OurSucees></OurSucees>
        </div>
    );
};

export default Home;