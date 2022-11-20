import Card from './Card';
import img1 from './assets/images/Frame 151 (1).png';
import img2 from './assets/images/Frame 151 (2).png';
import img3 from './assets/images/Frame 151 (3).png';
import img4 from './assets/images/Frame 151 (4).png';
import img5 from './assets/images/Frame 151 (5).png';
import img6 from './assets/images/Frame 151 (6).png';
import img7 from './assets/images/Frame 151 (7).png';
import img from './assets/images/Frame 151.png';


const Inspiration = () => {
    return ( 
        
        <div className="inspiration-wrapper">
            <div className="inspiration-header">
                <p>Inspiration for your next adventure</p>
            </div>

            <div className="card-wrapper">
                    <Card img={img1}/>
                    <Card img={img2}/>
                    <Card img={img3}/>
                    <Card img={img4}/>
                    <Card img={img5}/>
                    <Card img={img6}/>
                    <Card img={img7}/>
                    <Card img={img}/>

            </div>
        </div>
     );
}
 
export default Inspiration;