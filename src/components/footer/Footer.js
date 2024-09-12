import "./style.css"

import vk from "./../../img/icons/vk.svg"
import instagram from"./../../img/icons/instagram.svg"
import twitter from "./../../img/icons/twitter.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"
import gitHub from "./../../img/icons/gitHub.svg"
const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://vk.com/leon4ik_milion4ik" rel="noreferrer" target="_blank"><img src={vk} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://www.instagram.com/leonid_to_kalich/"  rel="noreferrer" target="_blank"><img src={instagram} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://github.com/Leanid554#!" rel="noreferrer" target="_blank"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/leanid-sushchynski-5010562ba" rel="noreferrer" target="_blank"><img src={linkedIn} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;