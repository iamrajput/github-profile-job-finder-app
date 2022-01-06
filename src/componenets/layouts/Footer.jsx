import {FaLinkedin, FaUserAlt, FaGithub, FaDev } from 'react-icons/fa'
function Footer() {
    const footerYear = new Date().getFullYear()
    return (
      <footer className="p-10 footer bg-base-200 text-base-content footer-center">
        <div>
          <div className="grid grid-flow-col gap-4">
             <a href="https://dev.to/atul1995" target="__blank">
                 <FaDev className='inline text-3xl mr-1' />
              </a>
              <a href="https://github.com/iamrajput" target="__blank">
                 <FaGithub className='inline text-3xl mr-1' />
              </a>
               <a href="https://www.linkedin.com/in/atul-kumar-singh-673357102/" target="__blank">
                 <FaLinkedin className='inline text-3xl mr-1' />
              </a>
              <a href="https://iamatul.netlify.app/" target="__blank">
                 <FaUserAlt className='inline text-3xl mr-1' />
              </a>
          </div>
        </div> 
        <div>
          <p>Copyright © {footerYear} - All right reserved</p>
        </div>
      </footer>
    )
}

export default Footer
