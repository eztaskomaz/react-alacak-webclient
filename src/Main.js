import {Component} from 'react';
import {YteBaseApp} from 'yte-react-core';
import microservices from "./microservices";
import en from './languages/en';
import tr from './languages/tr';
import routes from "./routes";
import menu from "./menu";
import enums from "./enum/index";

class Main extends Component {
    render() {
        const languages = [];
        languages.push(tr);
        languages.push(en);
        const logo = process.env.PUBLIC_URL + "/logo192.png";

        return <YteBaseApp
            nodeEnv={process.env.NODE_ENV}
            microservices={microservices}
            languages={languages}
            baseUrl={process.env.baseUrl}
            routes={routes}
            menu={menu}
            logo={logo}
            logoWidth={50}
            logoHeight={50}
            enums={enums}
            remotingBaseUrl="/alacakislemleri">

        </YteBaseApp>
    }
}

export default Main;