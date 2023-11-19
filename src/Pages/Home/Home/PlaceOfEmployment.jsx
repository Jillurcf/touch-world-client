import Marquee from "react-fast-marquee";

import flag1 from '../../../assets/flag/flagLithuania.jpg'
import flag2 from '../../../assets/flag/flagPoland.jpg'
import flag3 from '../../../assets/flag/Egypt.jpg'
import flag4 from '../../../assets/flag/flagAustralia.jpg'
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
const PlaceOfEmployment = () => {
  return (
    <div className="mb-24">
        <Sectiontitle heading="Places of Employment"></Sectiontitle>
      <Marquee>
      <img className="w-[200px] mr-12" src={flag4} alt="" />, <img className="w-[200px] mr-12" src={flag3} alt="" />, <img className="w-[200px] mr-12" src={flag2} alt="" />, <img className="w-[200px] mr-12" src={flag1} alt="" />, <img className="w-[200px] mr-12" src={flag1} alt="" />
      </Marquee>
    </div>
  );
};

export default PlaceOfEmployment;
