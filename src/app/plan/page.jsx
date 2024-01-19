import Image from 'next/image';
import './localiser.scss';
import raymond from '../../data/image/raymond.png';
const Plan = ({ setCloseMenu, closeMenu }) => {
  return (
    <>
      <div className='localiserContainer'>
        <div className='localTop'>
          <h1> Plan de localisation </h1>
        </div>

        <div className='planContainer'>
          <div className='contactForm'>
            <h1>Personnes à contacter</h1>
            <Image src={raymond} alt={raymond} />
            <h3>Raymond Djathe</h3>
            <span>
              <b>Tel:</b> +237 773 38 36 2{' '}
            </span>
          </div>
          <div className='planCarte'>
            <div style={{ width: '100%' }}>
              <iframe
                width='100%'
                height='600'
                frameborder='0'
                scrolling='no'
                marginheight='0'
                marginwidth='0'
                src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=deido%20grand-moulin%20douala%20cameroun+(My%20Business%20Name)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
