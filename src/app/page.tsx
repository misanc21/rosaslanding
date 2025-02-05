import { WelcomePage } from '../components/home/WelcomePage';
import { OfertaEducativa } from '../components/home/OfertaEducativa';
import { HistoryAndVideo } from '@/components/home/HistoryandVideo';
import { Convenios } from '@/components/home/Convenios';

export default function Home() {

  return (
    <div className="relative z-40">
      <WelcomePage />
      {/*<StoreGallery />*/}
      <HistoryAndVideo />
      <OfertaEducativa />
      <Convenios />
    </div>
  );
}
