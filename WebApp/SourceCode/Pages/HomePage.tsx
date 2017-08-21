import * as React from 'react';
import {
    MainBgView,
    MainTopBar,
    MainFooter
} from '../Components/CommonComponents';
import Http from '../Helper/HttpUtil';

class HomePage extends React.Component<undefined, undefined> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        Http.post('sys/appversion', {
            appType: 'ios',
            packageName: 'GZG'
        }, (result: boolean, res: Object)=>{
            console.log(res);
        });
    }

    render() {
        return (
            <section>
                <MainBgView/>
                <MainTopBar/>
                <section className="container">
                    <section className="main">
                    </section>
                    <section className="rightBar">
                    </section>
                    </section>
                <MainFooter/>
                <a href="#"><i className="iconfont goBackTop">&#xe61c;</i></a>
            </section>
        );
    }
}

export default HomePage;