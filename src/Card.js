import star from './assets/icons/star.svg';
function Card (props) {
    return(
        <div className="card">
                        <div className="card-image">
                            <img src={props.img} alt='' />
                        </div>
                        <div className="card-body">
                            <div className="card-body-title-wrapper">
                                <div className="card-body-title"><p>Desert King</p>
                                </div>
                                <div className="card-body-time"><p>1MBT per night</p>
                                </div>
                            </div>

                            <div className="card-body-dist">
                            <div className="card-body-distance"><p>2245km away</p></div>
                            <div className="card-body-period"><p>Available for 2 weeks stay</p></div>
                            </div>
                        
                            <div className=".card-body-rating">
                            <img src={star} alt=''/>
                            </div>

                    </div>
                </div>
    )
}
export default Card;