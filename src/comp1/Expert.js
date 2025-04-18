import './Expert.css';
import teacher from '../assets/teacher.png';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';

function Expert() {
  return (
    <div className='expert-container'>
      <div className='expert-left'>
        <div className='expert-features'>
          <div className='expert-feature'>
          
            <div className='feature-icon'><img src={f1} alt="Market Trends" /></div>
            <div className='feature-content'>
              <h3>Market Trends Analysis</h3>
              <p>Predictive insights to guide real estate strategies.</p>
            </div>  </div>
          
          <div className='expert-feature'>
            <div className='feature-icon'><img src={f2} /></div>
            <div className='feature-content'>
              <h3>Targeted Buyer Persona</h3>
              <p>Understand and connect with your ideal property buyers.</p>
            </div>
          </div>
          
          <div className='expert-feature'>
            <div className='feature-icon'><img src={f3}  /></div>
            <div className='feature-content'>
              <h3>Competitor Insights</h3>
              <p>Stand out in the property market with informed strategies.</p>
            </div>
          </div>
          
          <div className='expert-feature'>
            <div className='feature-icon'><img src={f4}  /></div>
            <div className='feature-content'>
              <h3>Visual Content Appeal</h3>
              <p>Captivate buyers with appealing visuals and immersive experiences.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='expert-right'>
        <div className='expert-image-container'>
          <img src={teacher} alt="Expert" className='expert-image' />
        </div>
      </div>
    </div>
  );
}

export default Expert;