import AnaSayfa from './components/AnaSayfa';
import Tahakkuk from './components/Tahakkuk';
import TahakkukTuruEkle from "./components/tahakkuk-turu/TahakkukTuruEkle";
import TahakkukTuruGuncelle from "./components/tahakkuk-turu/TahakkukTuruGuncelle";
import TahakkukTuruGoruntule from "./components/tahakkuk-turu/TahakkukTuruGoruntule";
import TahakkukTuruSorgula from "./components/tahakkuk-turu/TahakkukTuruSorgula";
import TahakkukTuruTasi from "./components/tahakkuk-turu/TahakkukTuruTasi";
import KalemTuruSorgula from "./components/kalem-turu/KalemTuruSorgula";
import KalemTuruGoruntule from "./components/kalem-turu/KalemTuruGoruntule";
import KalemTuruGuncelle from "./components/kalem-turu/KalemTuruGuncelle";
import KalemTuruEkle from "./components/kalem-turu/KalemTuruEkle";
import AlacakKategorisiGuncelle from "./components/alacak-kategorisi/AlacakKategorisiGuncelle";

const routes = [
    {path: "/", component: AnaSayfa},
    {path: "/tahakkuk", component: Tahakkuk},
    {
        path: "/faiz-tipi",
        moduleRoute:true,
        queryComponent: TahakkukTuruSorgula
    },
    {
        path: "/tahakkuk-turu",
        moduleRoute:true,
        queryComponent: TahakkukTuruSorgula,
        addComponent: TahakkukTuruEkle,
        viewComponent: TahakkukTuruGoruntule,
        updateComponent: TahakkukTuruGuncelle
    },
    {path: "/tahakkuk-turu/tasi", component: TahakkukTuruTasi},
    {
        path: "/kalem-turu",
        moduleRoute:true,
        queryComponent: KalemTuruSorgula,
        addComponent: KalemTuruEkle,
        viewComponent: KalemTuruGoruntule,
        updateComponent: KalemTuruGuncelle
    },
    {
        path: "/alacak-kategorisi",
        moduleRoute:true,
        queryComponent: AlacakKategorisiGuncelle
    },
    {
        path: "/resmi-tatil",
        moduleRoute:true,
        queryComponent: TahakkukTuruSorgula,
    },
    {
        path: "/etiket",
        moduleRoute:true,
        queryComponent: TahakkukTuruSorgula,
        addComponent: TahakkukTuruEkle,
        viewComponent: TahakkukTuruGoruntule,
        updateComponent: TahakkukTuruGuncelle
    },
    {
        path: "/kurum-hesap-plani",
        moduleRoute:true,
        queryComponent: TahakkukTuruSorgula
    },
    // { path:"/tanimlama-islemleri/tahakkuk-turu", exact:true, component: AlacakKategorisiSorgula},
    // { path:"/tanimlama-islemleri/tahakkuk-turu/sorgula", exact:true, component: AlacakKategorisiSorgula},
    // { path:"/tanimlama-islemleri/tahakkuk-turu/ekle", exact:true, component: KalemTuruEkle},
    // { path:"/tanimlama-islemleri/tahakkuk-turu/guncelle/:dto_id", exact:true, component: KalemTuruGuncelle},
    // { path:"/tanimlama-islemleri/tahakkuk-turu/goruntule/:dto_id", exact:true, component: KalemTuruGoruntule}

]

export default routes;