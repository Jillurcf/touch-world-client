import Marquee from "react-fast-marquee";

import flag1 from '../../../assets/flag/Austria.png'
import flag2 from '../../../assets/flag/Cyprus.png'
import flag3 from '../../../assets/flag/Egypt.png'
import flag4 from '../../../assets/flag/Lithuania.png'
import flag5 from '../../../assets/flag/Poland.png'
import flag6 from '../../../assets/flag/Servia.png'
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
const PlaceOfEmployment = () => {
  return (
    <div className="mb-24 bg-blue-950 text-white">
        <Sectiontitle heading="Places of Employment"></Sectiontitle>
      <Marquee className="py-8">
      <img className="w-[200px] mr-12" src={flag4} alt="" />, <img className="w-[200px] mr-12" src={flag3} alt="" />, <img className="w-[200px] mr-12" src={flag2} alt="" />, <img className="w-[200px] mr-12" src={flag1} alt="" />,
      <img className="w-[200px] mr-12" src={flag5} alt="" />
      <img className="w-[200px] mr-12" src={flag6} alt="" />
  
      </Marquee>
    </div>
  );
};

export default PlaceOfEmployment;
