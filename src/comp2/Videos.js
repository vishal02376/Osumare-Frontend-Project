import video from '../assets/video.png'
import Faq from '../assets/Faq.png'
import './Videos.css'
function Videos(){
    return(
        <>
            <div className="video">
         
                <center>
                <div className='video-data'>
                <h1>What Our Pharma Partners Say</h1>
                <p>Driving Transformations, One Brand at a Time</p>
                </div>
                    <img className='vis' src={video}/>
                </center>

                <center className='mar'>
                    <h1>Frequently Asked Questions</h1>
                    <p>Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.</p>
                    <img  className='Faq' src={Faq}/>
                </center>
            </div>
        </>
    )
}
export default Videos