import './property.css';
import bro from '../assets/bro.png';

function Property() {
    return (
        <div className="property-main">
            <div className='property-heading'>
                <h1>Driving Property Inquiries to Conversions</h1>
                <p>Streamlined Strategies for Real Estate Success</p>
            </div>   

            <div className='Property-Container'>
                <div className='Property-Left-img'>
                            <img src={bro} alt="Real estate strategy" />
                </div>
                <div className='Property-Right-Cont'>
                   
                    <h1>Optimized Path to Property Purchase</h1>
                    <p>
                        In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.
                    </p>
                  
                                 <button className="btns">Get started</button>
                </div>
            </div>         
        </div>
    );
}

export default Property;


//Right side icon
// import icon5 from '../assets/icon5.png'
// import icon6 from '../assets/icon6.png'
// import icon7 from '../assets/icon7.png'
// import icon8 from '../assets/icon8.png'