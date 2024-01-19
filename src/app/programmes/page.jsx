import Image from 'next/image';
import './programmes.scss';
import { programData } from '@/data/data';

const page = () => {
  return (
    <div className='programmeContainer'>
      <div className='programmes'>
        <div className='programTop'>
          <h1> {programData.name} </h1>
          <Image src={programData.image} alt={programData.image} />
        </div>

        <div className='programDate'>
          <p>{programData.infos} </p>
          <div className='allProgramContainer'>
            {programData.allPrograms.map((program) => (
              <div key={program.id} className='program'>
                <div className='programContainer'>
                  <h4>{program.date} </h4>
                  <ul>
                    <li>{program.eleven} </li>
                    <p>{program.elevenInfos} </p>
                  </ul>
                  <ul>
                    <li>{program.twelve} </li>
                    <p>{program.twelveInfos} </p>
                  </ul>
                  <ul>
                    <li>{program.fourteen} </li>
                    <p>{program.fourteenInfos} </p>
                  </ul>
                  <ul>
                    <li>{program.eighteen} </li>
                    <p>{program.eighteenInfos} </p>
                  </ul>
                  <ul>
                    <li>{program.twenty} </li>
                    <p>{program.twentyInfos} </p>
                  </ul>
                  <ul>
                    <li>{program.midnight} </li>
                    <p>{program.midnightInfos} </p>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
