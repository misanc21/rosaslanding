import { WelcomePage } from '../components/home/WelcomePage';
import { StoreGallery } from '../components/home/StoreGallery';
import principal from '../../public/principal.png'
import Image from 'next/image';

export default function Home() {

  return (
    <div className="relative z-40">
      <WelcomePage />
    </div>
  );
}
