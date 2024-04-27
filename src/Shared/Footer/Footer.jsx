import logo from '../../assets/logo.png'

const Footer = () => {
    return (
       <div>
         <footer className="footer p-10 bg-blue-300 border text-blue-950">
  <aside>
    <img className='w-[200px]' src={logo} alt="" />
    <p>Touch world International. <br /> Suite No-5/11, Paltan China Town (4th Floor) Nayapaltan, VIP Road, Dhaka-1000 </p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Global Requirement Services</a>
    <a className="link link-hover">Visa Services & Immigration</a>
    <a className="link link-hover">Air Ticket</a>
    <a className="link link-hover">Outsourcing Payroll Compliance Services</a>
    <a className="link link-hover">Skill Developlment Center</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
 
</footer>
 <div className='lg:flex mx-auto gap-1 text-center'>
 <p className='mx-auto text-xs lg:text-lg '>@All rights reserved by Touch world international</p>
 <p className='text-xs mt-1'>Developed by <a className='underline text-blue-600' href="https://portfolio-59da3.web.app">Jillur Rahman</a> </p>
 </div>
 
       </div>
    );
};

export default Footer;