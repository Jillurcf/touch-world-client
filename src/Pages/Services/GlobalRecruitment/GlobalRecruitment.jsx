import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import PlaceOfEmployment from "../../Home/Home/PlaceOfEmployment";
import HowWeWork from "./HowWeWork";
import OurSpecializaitonSkilled from "./OurSpecializaitonSkilled";
import SemiSkill from "./SemiSkill";

const GlobalRecruitment = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-[100px]"></div>
      <Sectiontitle heading="Global Recruitment Services"></Sectiontitle>
      <p>
        We are providing all kinds of Manpower recruitment globally. Our company
        not only has mastered providing brilliant and knowledgeable employees
        but we are also recognized for our Global Recruitment Services
        worldwide. We provide human resources for various nations. Our team of
        recruiters follows international methods and parameters while deciding
        the most eligible candidates as per the requirements of our clients. We
        are also pleased to help the candidates with formalities related to the
        issuance of visas and medical clearance. We have been granted a Global
        Recruitment certification and permission to recruit at Global regions to
        facilitate this.
      </p>
      
      <PlaceOfEmployment></PlaceOfEmployment>

      <Sectiontitle heading="How we work"></Sectiontitle>
      
      <HowWeWork
        title="Step=01"
        value="Requirments received from clients"
      ></HowWeWork>
      <HowWeWork
        title="Step=02"
        value="Search our data bank for qualified works"
      ></HowWeWork>
      <HowWeWork
        title="Step=03"
        value="Also release advertisement in Newspaper for potential Workers"
      ></HowWeWork>
      <HowWeWork
        title="Step=04"
        value="Screen CV and short-list for interview"
      ></HowWeWork>
      <HowWeWork
        title="Step=05"
        value="Interview by Recruitment Specialist for client selection"
      ></HowWeWork>
      <HowWeWork
        title="Step=06"
        value="Candidates sent for technical trade test if required"
      ></HowWeWork>
      <HowWeWork
        title="Step=07"
        value="Final interview by employers authorized representative"
      ></HowWeWork>
      <HowWeWork
        title="Step=08"
        value="Selected candidates sent for Medical Examination"
      ></HowWeWork>
      <HowWeWork
        title="Step=09"
        value="Candidate’s passports are collected for Visa processing
"
      ></HowWeWork>
      <HowWeWork
        title="Step=10"
        value="Completion of Emigration and other required formalities"
      ></HowWeWork>
      <HowWeWork
        title="Step=11"
        value="Orientation about company, country and culture to workers"
      ></HowWeWork>
      <HowWeWork
        title="Step=12"
        value="Tickets are issued after liaison with all parties involved"
      ></HowWeWork>
      <Sectiontitle heading="Our Specialization (Skilled)"></Sectiontitle>
      <OurSpecializaitonSkilled></OurSpecializaitonSkilled>
      <SemiSkill></SemiSkill>
    </div>
  );
};

export default GlobalRecruitment;
