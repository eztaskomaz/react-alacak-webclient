import AnaSayfa from './components/AnaSayfa';
import Tahakkuk from './components/Tahakkuk';
import TahakkukTuruEkle from "./components/tahakkuk-turu/tahakkuk-turu-ekle";
import TahakkukTuruGuncelle from "./components/tahakkuk-turu/tahakkuk-turu-guncelle";
import TahakkukTuruGoruntule from "./components/tahakkuk-turu/tahakkuk-turu-goruntule";
import TahakkukTuruSorgula from "./components/tahakkuk-turu/tahakkuk-turu-sorgula";

const routes = [
    {path: "/", component: AnaSayfa},
    {path: "/tahakkuk", component: Tahakkuk},
    {
        path: "/tahakkuk-turu",
        moduleRoute: true,
        queryComponent: TahakkukTuruSorgula,
        addComponent: TahakkukTuruEkle,
        viewComponent: TahakkukTuruGoruntule,
        updateComponent: TahakkukTuruGuncelle
    }

]

export default routes;