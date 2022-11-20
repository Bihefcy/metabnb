import mb from './assets/icons/mbtokenlogo.svg'
import meta from './assets/icons/metamask.svg'
import open from './assets/icons/opense.svg'
const Divider = () => {
    return ( 
        <div className="divider">
            <div className="flex">
                <img src={mb} alt=""></img>
                <p>MBTOKEN</p>
            </div>
            <div>
                <img src={meta} alt=""></img>
            </div>
            <div>
                <img src={open} alt=""></img>
            </div>
        </div>
     );
}
 
export default Divider;