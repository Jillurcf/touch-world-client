import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import aboutimg from '../../../assets/aboutus-2.jpg'
import missionimg from '../../../assets/mission.jpg';
import visionimg from '../../../assets/vision.jpg'

const WhoWeAre = () => {
  return (
    <div>
      <Sectiontitle
        heading="Who We are"
        subHeading="We aim to engage the right person at the right place-Globally "
      ></Sectiontitle>
      <div className="">
      <div className="lg:flex justify-between gap-8">
        <img className="md:w-2/6" src={aboutimg} alt="" />
        <p className="">
          <span className="text-xl font-bold text-orange-500">About us:</span>
          <br /> Touch World International is one of the leading
          government-approved recruiting agent as well as a complete overseas
          recruiting solutions company in Bangladesh with license no. RL-2277,
          registered under the Ministry of Expatriates Welfare & Overseas
          Employment which facilitates the professionally managed outflow of
          workforce from Bangladesh to overseas destinations. We are also a
          member of the Bangladesh Association of International Recruiting
          Agencies (BAIRA). We are offering all types of Manpower recruitment
          services in different countries and bringing opportunities for
          Bangladesh. We have specialized services in International Recruitment,
          Staffing, HR Services for overseas. We are passionate about hiring and
          the positive impact it can have on peoples lives and businesses.
          Touch World International is fully committed to the complete
          satisfaction of both, our prestigious clients as well as job seekers
          who are desirous of overseas employment with a right & and a better
          secure future. We provide overseas placement for those looking forward
          to broadening their horizons and heading for better career
          opportunities in the world. Apart from the head office in Dhaka,
          Bangladesh, we have a wide network of operations with branches in all
          major cities of Bangladesh and overseas. .
        </p>
      </div>

        <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="w-8/10">
        <p className="py-8">
          <span className="text-xl font-bold text-orange-500">
            Our Mission:
          </span>
          <br />
          Our mission is to meet clients Human Resource needs completely by getting the perfect Employer-Employee fit and thereby the gap between the available talent pool in the market and the Dynamic Requirements of various companies across the globe and to contribute to the countrys national economy by transforming its huge manpower into human resources.
        </p>
        </div>
       
       <img className="md:w-2/3 lg:order-last order-first" src={missionimg} alt="" />
     
        </div>
        <div className="lg:flex gap-8">
            <img className="lg:w-2/6" src={visionimg} alt="" />
            <p>
         
          <span className="text-xl font-bold text-orange-500">
            Our vision:
          </span>
          <br />
          Our vision is to lead in the creation and delivery of innovative workforce solutions and services that enable our clients to win in the changing world of work and to be a leading recruiting service provider in the industry. 
        </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
