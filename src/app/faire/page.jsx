import { faireData } from '@/data/data';
import './faire.scss';

const pages = () => {
  return (
    <>
      <div className='faireContainer'>
        <div className='faireTop'>
          <h1> Faire part </h1>
        </div>

        <div className='faire'>
          <div className='faireList'>
            <ul>
              {faireData.map((faire) => (
                <li key={faire.id}>{faire.message} </li>
              ))}
            </ul>
            <p>
              La famille <b>Migwateu </b> et <b>Mibateu</b> ont le profond
              régret de vous faire part du décès de leur femme, maman, mère,
              arrière grande mère survenu le dimanche 17 Décembre 2023 à
              l’hopital de la garnison Militaire de Douala.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default pages;
