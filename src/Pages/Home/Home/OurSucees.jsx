import Sectiontitle from '../../../Component/SectionTitle/Sectiontitle';
import visa1 from '../../../assets/suceesVisa/01.jpg'
import visa2 from '../../../assets/suceesVisa/02.jpg'
import visa3 from '../../../assets/suceesVisa/03.jpg'
import visa4 from '../../../assets/suceesVisa/04.jpg'

const OurSucees = () => {
    return (
        <div>
            <Sectiontitle heading="Our Success"></Sectiontitle>
            <div className='grid grid-cols-2 gap-4'>
            <div>
                <img className='border' src={visa1} alt="" />
            </div>
            <div>
            <img className='border' src={visa2} alt="" />
            </div>
            <div>
            <img className='border' src={visa3} alt="" />
            </div>
            <div>
            <img className='border' src={visa4} alt="" />
            </div>
            </div>
        </div>
    );
};

export default OurSucees;