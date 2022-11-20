import img1 from './assets/images/image 7.png';
import img2 from './assets/images/image 8.png';
import img3 from './assets/images/image 9.png'


const Learn = () => {
    return ( 
        <div className="learn-wrapper">
            <div className="learn-text">
                <h1>Metabnb NFTs</h1>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.</p>
                <button>Learn More</button>
            </div>
            <div className="learn-image">
                <img src={img1} alt=''/>
                <img src={img2} alt=''/>
                <img src={img3} alt=''/>
            </div>
        </div>
     );
}
 
export default Learn;