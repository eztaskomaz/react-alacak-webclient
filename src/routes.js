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
        moduleRoute:true,
        queryComponent: TahakkukTuruSorgula,
        addComponent: TahakkukTuruEkle,
        viewComponent: TahakkukTuruGoruntule,
        updateComponent: TahakkukTuruGuncelle
    },
    // { path:"/tanimlama-islemleri/tahakkuk-turu", exact:true, component: TahakkukTuruSorgula},
    // { path:"/tanimlama-islemleri/tahakkuk-turu/sorgula", exact:true, component: TahakkukTuruSorgula},
    // { path:"/tanimlama-islemleri/tahakkuk-turu/ekle", exact:true, component: TahakkukTuruEkle},
    // { path:"/tanimlama-islemleri/tahakkuk-turu/guncelle/:dto_id", exact:true, component: TahakkukTuruGuncelle},
    // { path:"/tanimlama-islemleri/tahakkuk-turu/goruntule/:dto_id", exact:true, component: TahakkukTuruGoruntule}

]

export default routes;