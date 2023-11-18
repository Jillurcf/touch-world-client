import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slideImg1 from '../../../assets/Bannerimg/aroplane1.jpg'
import slideImg2 from '../../../assets/Bannerimg/airoplane2.jpg'
import slideImg3 from '../../../assets/Bannerimg/airoplane3.jpg'
const Slider = () => {
    return (
        <div className="">
            <Carousel>
                <div>
                    <img src={slideImg1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slideImg2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={slideImg3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;