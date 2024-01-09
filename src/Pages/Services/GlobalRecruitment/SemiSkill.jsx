import { useEffect, useState } from "react";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";


const SemiSkill = () => {
    const [skills, setSkills] = useState([])
    console.log(skills);
    useEffect(() => {
     fetch('/semiSkill.json')
     .then(res=>res.json())
     .then(data=> setSkills(data))
    }, [])
    
    return (
        <div>
             <Sectiontitle heading="Semi Skills"></Sectiontitle>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mx-auto">
           
            {
                skills.map(skill=> <div key={skill.id}>
                    <img src={skill.img_url} alt="" />
                    <p className="text-center">{skill.description}</p>
                </div>)
            }
        </div>
        </div>
    );
};

export default SemiSkill;