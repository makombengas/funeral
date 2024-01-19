import Image from 'next/image';
import './footer.scss';
import raymond from '../../data/image/raymond.png';

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footer'>
        <Image src={raymond} alt={raymond} />
        <span>
          <b>Personnes à contacter:</b> +237 773 38 36 2
        </span>
      </div>
    </div>
  );
};

export default Footer;
