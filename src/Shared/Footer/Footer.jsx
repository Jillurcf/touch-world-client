import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-blue-300 border text-blue-950">
  <aside>
    <img className='w-[200px]' src={logo} alt="" />
    <p>Touch world International.<br/>All rights reserved by Touch world international</p>
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
    );
};

export default Footer;