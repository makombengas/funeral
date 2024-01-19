import Image from 'next/image';
import mama_one from '../../data/image/mama_one.png';
import './bio.scss';
import { bioData } from '@/data/data';

const page = () => {
  return (
    <>
      <div className='bioContainer'>
        <div className='bioTop'>
          <h1> Biographie </h1>
        </div>

        <div className='bio'>
          <div className='bioInfos'>
            <div className='headerName'>
              <Image src={mama_one} alt={mama_one} />
              <h1>
                Mme veuve <b>Ngandjo</b> née <b>Nkwatchou berthe.</b>
              </h1>
              <p>
                Née vers 1940 à Bakoua, nous quitte et laisse plusieurs enfants,
                petits fils et arrières petits fils.
              </p>
            </div>
            {bioData.map((bio) => (
              <div className='bioList' key={bio.id}>
                <h3>{bio.intro} </h3>
                <div className='list'>
                  <ul>
                    <li>{bio.info_one} </li>
                    <li>{bio.info_two} </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
