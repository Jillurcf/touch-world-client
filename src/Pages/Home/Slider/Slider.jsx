import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slideImg1 from '../../../assets/Bannerimg/aroplane1.jpg'
import slideImg2 from '../../../assets/Bannerimg/airoplane2.jpg'
import slideImg3 from '../../../assets/Bannerimg/airoplane3.jpg'
const Slider = () => {
    return (
        <div className="">
            <Carousel className="">
                <div>
                    <img className="" src={slideImg1} />
                    <p className="legend">VSA SERVICES</p>
                </div>
                <div>
                    <img src={slideImg2} />
                    <p className="legend">AIR TICKET</p>
                </div>
                <div>
                    <img src={slideImg3} />
                    <p className="legend">IMIGRATION</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;