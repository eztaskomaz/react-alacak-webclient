const tanimlamaIslemleri = [
    {label: 'menu.faiz-tipi-islemleri', title: "menu.faiz-tipi-islemleri", iconParams: {icon: ["fas", "suitcase"]}, to :'/faiz-tipi'},
    {label: 'menu.tahakkuk-turu-islemleri', title: "menu.tahakkuk-turu-islemleri", iconParams: {icon: ["fas", "sitemap"]}, to :'/tahakkuk-turu'},
    {label: 'menu.kalem-turu-islemleri', title: "menu.kalem-turu-islemleri", iconParams: {icon: ["fas", "pencil-alt"]}, to :'/kalem-turu'},
    {label: 'menu.alacak-kategorisi-islemleri', title: "menu.alacak-kategorisi-islemleri", iconParams: {icon: ["fas", "folder-open"]}, to :'/alacak-kategorisi'},
    {label: 'menu.etiket-islemleri', title: "menu.etiket-islemleri", iconParams: {icon: ["fas", "tag"]}, to :'/etiket'},
    {label: 'menu.resmi-tatil-islemleri', title: "menu.resmi-tatil-islemleri", iconParams: {icon: ["fas", "calendar"]}, to :'/resmi-tatil'},
    {label: 'menu.kurum-hesap-plani-islemleri', title: "menu.kurum-hesap-plani-islemleri", iconParams: {icon: ["fas", "share-square"]}, to :'/kurum-hesap-plani'},
];

const menu = [
    {label: 'menu.HomePage', title: "menu.HomePage", iconParams: {icon: ['fas', 'home']}, to: '/'},
    {label: 'menu.Tahakkuk', title: "menu.Tahakkuk", iconParams: {icon: ['fas', 'home']}, to: '/tahakkuk'},
    {
        label: 'menu.tanimlama-islemleri', title: 'menu.tanimlama-islemleri', iconParams: {icon: ["fas", "file"]}, items: tanimlamaIslemleri
    }
]

export default menu;