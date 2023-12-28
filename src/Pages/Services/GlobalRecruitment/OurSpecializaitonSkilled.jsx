import { useEffect, useState } from "react";


const OurSpecializaitonSkilled = () => {
    const [skills, setSkills] = useState([])
    useEffect(()=>{
        fetch('/specialSkill.json')
        .then(res=> res.json())
        .then(data=> setSkills(data))
    },[])

    return (
        <div className="grid grid-cols-6 gap-8 mx-auto">
           {
            skills.map(skill=> <div key={skill.id}>
                <div >
                   <img className="" src={skill.img_url} alt="" />
                   <p className="text-center">{skill.description}</p>
                </div>
            </div>)
           }
        </div>
    );
};

export default OurSpecializaitonSkilled;