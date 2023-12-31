import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";
import aboutimg from "../../assets/aboutus-2.jpg";
import missionimg from "../../assets/vision.jpg";
import visionimg from "../../assets/mission.jpg";
import saiful from "../../assets/OutTeam/executive/1.png";
import ruhul from "../../assets/OutTeam/executive/2.png";
import sajib from "../../assets/OutTeam/executive/3.png";
import Nayan from "../../assets/OutTeam/executive/4.png";
import munir from "../../assets/OutTeam/OthersMember/1.png";
import minhaj from "../../assets/OutTeam/OthersMember/2.png";
import hasan from "../../assets/OutTeam/OthersMember/3.png";
import Rasel from "../../assets/OutTeam/OthersMember/4.png";
import Ejaj from "../../assets/OutTeam/OthersMember/5.png";
import legal from '../../assets/legaldoc.jpg'

const Aboutus = () => {
  return (
    <div className="min-h-screen">
      <div className="h-[100px]"></div>
      <Sectiontitle heading="About us"></Sectiontitle>
      <p>
        Welcome to Touch World International Recruiting Agency. Your Gateway to
        Talent Excellence! We are pleased to extend a warm welcome to you as you
        step into the world of Touch World International. As a premier
        recruiting agency, we take great pride in our government-approved
        status, ensuring a foundation of trust and reliability. At Touch World
        International, our mission is to connect exceptional talent with
        extraordinary opportunities. Whether you are a talented professional
        looking for your next career move or an organization looking for
        top-level candidates, we are here to bridge the gap and facilitate
        success. Our team of dedicated experts are committed to understanding
        your unique needs and aspirations, delivering tailored solutions that
        advance careers and businesses. With a focus on integrity, transparency,
        and efficiency, we aim to redefine the recruiting experience. Thank you
        for choosing Touch World International. We look forward to being your
        trusted partner in shaping a future of unparalleled success.
      </p>
      <div className="flex justify-between gap-8">
        <img className="w-2/6" src={aboutimg} alt="" />
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
          the positive impact it can have on peoples lives and businesses. Touch
          World International is fully committed to the complete satisfaction of
          both, our prestigious clients as well as job seekers who are desirous
          of overseas employment with a right & and a better secure future. We
          provide overseas placement for those looking forward to broadening
          their horizons and heading for better career opportunities in the
          world. Apart from the head office in Dhaka, Bangladesh, we have a wide
          network of operations with branches in all major cities of Bangladesh
          and overseas. .
        </p>
      </div>
      <div className="flex my-12">
        <p className="py-8">
          <span className="text-xl font-bold text-orange-500">
            Our Mission:
          </span>
          <br />
          Our mission is to meet clients Human Resource needs completely by
          getting the perfect Employer-Employee fit and thereby the gap between
          the available talent pool in the market and the Dynamic Requirements
          of various companies across the globe and to contribute to the
          countrys national economy by transforming its huge manpower into human
          resources.
        </p>
        <img className="w-2/6" src={missionimg} alt="" />
      </div>
      <div className="flex gap-8">
        <img className="w-2/6" src={visionimg} alt="" />
        <p>
          <span className="text-xl font-bold text-orange-500">
            Our Vission:
          </span>
          <br />
          Our vision is to lead in the creation and delivery of innovative
          workforce solutions and services that enable our clients to win in the
          changing world of work and to be a leading recruiting service provider
          in the industry.
        </p>
      </div>
      
      <Sectiontitle heading="Our Team"></Sectiontitle>
      <div className="grid grid-cols-2 gap-24">
        <div>
          <div className="flex justify-between">
            <div className=" mt-24">
              <h1 className="text-4xl font-bold text-gray-600">
                Proprietor & Founder
              </h1>
              <h1 className="text-4xl font-bold text-orange-400">Message</h1>
            </div>
            <div className="">
              <img
                className="absolute pr-8 pb-4 w-[200px] h-[220px] z-30"
                src={saiful}
                alt="image"
              />
              <div className=" relative w-[200px] h-[220px] bg-orange-500 top-3 z-10 rounded-full">
               
              </div>
            </div>
          </div>
          <div className="">
            <h5 className="text-2xl font-bold text-red-800">Sayful Islam</h5>
            <p className="text-justify">
              I am delighted to welcome you to a world of boundless exploration
              and unforgettable experiences. Our journey began with a simple but
              profound vision to transform travel into a transformative art,
              where each destination visited leaves an indelible mark on your
              heart and mind. Sayful Islam As a visionary Recruitment veteran,
              with over 10 years of comprehensive experience in global
              recruitment process. We are equipped with powerful integrated
              recruitment technologies and have a. team of seasoned expert
              recruiters. We have all the latest facilities in the areas of
              communication, frequent transport etc., and leading to expedition
              of the entire process. Additionally, all of our recruiters have
              significant management experience. They understand the job
              requirement completely and appreciated that it is the human
              resources that the backbone of an organization, success.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="mt-24">
              <h1 className="text-4xl font-bold text-gray-600">
                Executive Chairman
              </h1>
              <h1 className="text-4xl font-bold text-orange-400">Message</h1>
            </div>
            <div className="">
              <img
               className="absolute pr-8 pb-4 w-[200px] h-[220px] z-30"
                src={ruhul}
                alt="image"
              />
               <div className=" relative w-[200px] h-[220px] bg-orange-500 top-3 z-10 rounded-full">
               
               </div>
            </div>
          </div>
          <div className="">
            <h5 className="text-2xl font-bold text-red-800">
              Major (Retd.) Md. Ruhul Amin
            </h5>
            <p className="text-justify">
              Communication, Connection and attitude of giving honest service
              are true keys to success in any field/endeavor and, it is ‘the
              most relevant strength of business. Accordingly we are determined
              to bring success in our business where our esteemed clients are
              our products and life line. We are promised and dedicated to
              provide legendary support and services to our valued customers as
              we pledge them. We do respect the demands of our guests like our
              VIPs to earn their faith and satisfaction through providing
              world-class support and services. Beginning with your first step
              into our lounge (lobby) will make you confident about our work
              ethic and standards of our excellence. And I am certain that you
              will be our ambassador from the next morning. Hereby I welcome and
              invite you to see, feel and enjoy our services to experience our
              sincerity and genuineness in bringing your success by making your
              dream come true. Let us work together to touch the sky of your
              dream of success. With profound regards.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="mt-24">
              <h1 className="text-4xl font-bold text-gray-600">
                Co-founder & CEO
              </h1>
              <h1 className="text-4xl font-bold text-orange-400">Message</h1>
            </div>
            <div className="">
              <img
                  className="absolute pr-8 pb-4 w-[200px] h-[220px] z-30"
                src={sajib}
                alt="image"
              />
              <div className=" relative w-[200px] h-[220px] bg-orange-500 top-3 z-10 rounded-full">
               
               </div>
            </div>
          </div>
          <div className="">
            <h5 className="text-2xl font-bold text-red-800">Sajib Paul</h5>
            <p className="text-justify">
              An organization, no matter how well designed, is only as good as
              the people who live and work in it. – “Dee Hock” <br /> I believe
              in this valuable quote because throughout my 20 years of career
              journey, I’ve realized the secret of successful organizations is
              placing the right person in the right position and we’re here to
              take this challenge to provide the right personnel for your
              establishment. Sajib Paul As a seasoned hotelier and visionary
              hospitality veteran, with over 20 years of comprehensive
              experience in maximizing resources and improving the bottom line
              through expert leadership in quality service, staff development,
              cost control, and visionary P&L management for leading
              multiservice hotels and resort groups across international
              geographies. Innately wired for strategic and tactical thinking,
              always I try my best to implement best practices with a strong
              sense of urgency, responsibility, and accountability to surpass
              customer expectations and establish enduring brands from scratch.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="mt-24">
              <h1 className="text-4xl font-bold text-gray-600">
                Director of Liaison, <br /> BMET / Immigration
              </h1>
              <h1 className="text-4xl font-bold text-orange-400">Message</h1>
            </div>
            <div className="">
              <img  className="absolute pr-8 pb-4 w-[200px] h-[220px] z-30"src={Nayan} alt="image" />
              <div className=" relative w-[200px] h-[220px] bg-orange-500 top-3 z-10 rounded-full">
               
               </div>
            </div>
          </div>
          <div className="">
            <h5 className="text-2xl font-bold text-red-800">Nayan Khan</h5>
            <p className="text-justify">
              Commitment needs to be on top priority... I tried to implement
              during my journey, over 14 years in the global recruitment
              process, and visa processing for different countries, expert in
              BMET immigration clearance card issues. I began my career in
              recruitment and executive search over 14 years. I’m dedicated and
              committed to excellence. I can understand the needs of my clients
              and candidates. I have a consultative approach and attract
              top-caliber different-level candidates. I enjoy working with
              candidates and clients. With our global recruitment services, we
              assist businesses in expanding their global workforce. Our experts
              guide you through the intricacies of international hiring,
              immigration, and compliance. We ensure that your overseas
              employees are hired efficiently and integrated seamlessly into
              your global operations
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-24 mt-36">
        <div className="">
          <img
            className="absolute pr-8 pb-4 w-[200px] h-[220px] z-30  mx-auto "
            src={munir}
            alt="image"
          />
             <div className=" relative w-[200px] h-[220px] bg-orange-500 top-3 z-10 rounded-full"></div>
         <div className="py-8 text-center">
         <h1 className="text-red-800 font-bold text-xl">MD Monir Hossain</h1>
          <p>Business Development Director</p>
         </div>
         
        </div>
        <div className="">
          <img
            className="absolute pr-8 pb-4 w-[200px] h-[220px] z-30  mx-auto "
            src={minhaj}
            alt="image"
          />
           <div className=" relative w-[200px] h-[220px] bg-orange-500 top-3 z-10 rounded-full"></div>
          <div className="py-8 text-center">
          <h1 className="text-red-800 font-bold text-xl">
            Mohammad Minhazur Rahman
          </h1>
          <p>Public Relation officer</p>
          </div>
        </div>
        <div className="">
          <img
             className="absolute pr-8 pb-4 w-[200px] h-[220px] z-30  mx-auto "
            src={hasan}
            alt="image"
          />
           <div className=" relative w-[200px] h-[220px] bg-orange-500 top-3 z-10 rounded-full"></div>
         <div className="py-8 text-center">
         <h1 className="text-red-800 font-bold text-xl">MD Hasan Al Mamun</h1>
          <p>Engineer</p>
         </div>
        </div>
        <div className="">
          <img
             className="absolute pr-8 pb-4 w-[200px] h-[220px] z-30  mx-auto "
            src={Rasel}
            alt="image"
          />
          <div className=" relative w-[200px] h-[220px] bg-orange-500 top-3 z-10 rounded-full"></div>
        <div className="py-8 text-center">
        <h1 className="text-red-800 font-bold text-xl">Rasel Hossain</h1>
          <p>Embassy Liaison / Accountant</p>
        </div>
        </div>
        <div className="">
          <img
            className="absolute pr-8 pb-4 w-[200px] h-[220px] z-30  mx-auto "
            src={Ejaj}
            alt="image"
          />
           <div className=" relative w-[200px] h-[220px] bg-orange-500 top-3 z-10 rounded-full"></div>
          <div className="mt-8 text-center">
          <h1 className="text-red-800 font-bold text-xl text-center">Ejaj Molla</h1>
          <p>Office Executive</p>
          </div>
        </div>
      </div>
      <Sectiontitle heading="License & Certificates"></Sectiontitle>
      {/* <div className="grid grid-cols-2 gap-8"> */}
      <div className="">
        <img src={legal} alt="" />
        {/* <div className="border">
          <img src="https://i.ibb.co/2Kdr6Lg/tl.jpg" alt="" />
        </div>
        <div>
          <img
            className="border"
            src="https://i.ibb.co/MpTn3XF/license.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="border"
            src="https://i.ibb.co/9cgXqJ5/registration.jpg"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Aboutus;
