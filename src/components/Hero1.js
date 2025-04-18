import './Hero1.css';
import teacherImg from '../assets/cuate.png'

function Hero1(){
return(
<>
<center className='middleText'> 
<h1>Real Estate-Focused Digital Mastery</h1>
</center>
<div className='heroSection'>

<div className='leftBox'>

<img src={teacherImg} 
alt='digital estate' className='mainPic'/>
</div>

<div className='rightBox'>


<h2>Unlock the Potential of Digital Real Estate Excellence</h2>


<p>At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.</p>
<div className='lineThing'>
    
</div>
<button className='goButton'>Get started</button>
</div>
</div>
</>
);

}

export default Hero1;