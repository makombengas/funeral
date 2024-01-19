import Image from 'next/image';
import './hommages.scss';
import { hommagesData } from '@/data/data';

const page = () => {
  return (
    <div className='hommagesContainer'>
      <div className='hommageTop'>
        <h1> Hommages </h1>
      </div>
      <div className='hommageContainer'>
        {hommagesData.map((data) => (
          <div className='hommage' key={data.id}>
            <div className='image'>
              <Image src={data.image} alt={data.image} />
            </div>
            <div className='hommageInfos'>
              <h3>{data.name} </h3>
              <p>{data.message}</p>
              <span>{data.text} </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
