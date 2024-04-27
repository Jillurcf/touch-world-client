import Sectiontitle from '../../../Component/SectionTitle/Sectiontitle';
import visa1 from '../../../assets/suceesVisa/001.jpg'
import visa2 from '../../../assets/suceesVisa/002.jpg'
import visa3 from '../../../assets/suceesVisa/003.jpg'
import visa4 from '../../../assets/suceesVisa/004.jpg'

const OurSucees = () => {
    return (
        <div className='px-4 lg:px-0'>
            <Sectiontitle heading="Our Success"></Sectiontitle>
            <div className='grid grid-cols-2 gap-12'>
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