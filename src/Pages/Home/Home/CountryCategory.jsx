
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';


import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import Sectiontitle from '../../../Component/SectionTitle/Sectiontitle';

const CountryCategory = () => {

  return (
<div>
  <Sectiontitle heading="Services we provide" subHeading="Quality services is our commitment"></Sectiontitle>
<Swiper
      slidesPerView={3}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
      
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="lg:text-2xl text-center text-base upercase -mt-24 lg:-mt-36 font-bold text-white">Global Recruitment <br /> Services </h3>
        </SwiperSlide>
      <SwiperSlide>
      <img src={slide2} alt="" />
      <h3 className="lg:text-2xl text-center text-base upercase -mt-24 lg:-mt-36 font-bold text-white">     All kinds of Manpower <br /> recruitment </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="lg:text-2xl text-center text-base upercase -mt-24 lg:-mt-36 font-bold text-white">   Immigration & Visa <br /> services , Air Ticket</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="lg:text-2xl text-center text-base upercase -mt-24 lg:-mt-36 font-bold text-white">  Outsourcing payroll <br /> compliance services </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="lg:text-2xl text-center text-base upercase -mt-24 lg:-mt-36 font-bold text-white">SDC Overseas <br /> Technical Training & <br /> Testing Center</h3>
        </SwiperSlide>
      
    </Swiper>
</div>
    
  
      )
    
};

export default CountryCategory;