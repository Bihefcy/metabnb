import image1 from "./assets/images/image 3.png"
import image2 from "./assets/images/image 4.png"
import image3 from "./assets/images/image 5.png"
import image4 from "./assets/images/image 6.png"
const Landing = () => {
    return ( 
        <div className="landing">
            <div className="landing-text">
                <div className="landing-text-head">
                    <p>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></p>
                </div>
                <div className="landing-text-body">
                    <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone.</p>
                </div>
                <div className="landing-text-search">
                    <input type="search" placeholder="Search location"></input>
                    <button>Search</button>
                </div>
            </div>

            <div className="landing-image">
                <div className="landing-image-1">
                    <img src={image1} alt=""/>
                    <img src={image2} alt=""/>
                </div>
                <div className="landing-image-2">
                    <img src={image3} alt=""/>
                    <img src={image4} alt=""/>
                </div>
            </div>
        </div>
     );
}
 
export default Landing;