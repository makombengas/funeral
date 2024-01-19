import Slider from '@/components/slider/Slider';
import './page.scss';

export default function Home() {
  return (
    <main className='main'>
      <div className='description'>
        <Slider />
      </div>
    </main>
  );
}
