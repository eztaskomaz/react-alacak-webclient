const tanimlamaIslemleri = [
    {label: 'menu.TahakkukTuru', title: "menu.TahakkukTuru", iconParams: {icon: ["fas", "home"]}, to :'/tahakkuk-turu'},
];

const menu = [
    {label: 'menu.HomePage', title: "menu.HomePage", iconParams: {icon: ['fas', 'home']}, to: '/'},
    {label: 'menu.Tahakkuk', title: "menu.Tahakkuk", iconParams: {icon: ['fas', 'home']}, to: '/tahakkuk'},
    {
        label: 'menu.tanimlama-islemleri', title: 'menu.tanimlama-islemleri', iconParams: {icon: ["fas", "file"]}, items: tanimlamaIslemleri
    }
]

export default menu;