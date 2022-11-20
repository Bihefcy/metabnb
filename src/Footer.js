import metaw from './assets/icons/metadataw.svg';
import fb from './assets/icons/facebook.svg';
import tw from './assets/icons/twitter.svg';
import ig from './assets/icons/instagram.svg';


const Footer = () => {
    return ( 
        <div className="footer">
            <div className="meta-logo">
                <img src={metaw} alt=''/>
                <div className="social">
                <img src={fb} alt=''/>
                <img src={ig} alt=''/>
                <img src={tw} alt=''/> 
                </div>
                <p>c 2022 Metabnb</p>
            </div>

            <div className="hide">
                <h3>Community</h3>
                <p>NFT</p>
                <p>Tokens</p>
                <p>Landlords</p>
                <p>Discord</p>
            </div>

            <div className="hide">
                <h3>Places</h3>
                <p>Castle</p>
                <p>Farms</p>
                <p>Beach</p>
                <p>Learn More</p>
            </div>

            <div className="hide">
                <h3>About Us</h3>
                <p>Road map</p>
                <p>Creators</p>
                <p>Career</p>
                <p>Contact us</p>
            </div>
        </div>
     );
}
 
export default Footer;