import { WelcomePage } from '../components/home/WelcomePage';
import { StoreGallery } from '../components/home/StoreGallery';

export default function Home() {

  return (
    <div className="relative z-40">
      <WelcomePage />
      <StoreGallery />
    </div>
  );
}
