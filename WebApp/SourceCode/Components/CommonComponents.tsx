import * as React from 'react';

export class MainBgView extends React.Component<undefined, undefined> {
    render() {
        return (
            <section>
                <ul className="bg">
                    <li><span>001</span></li>
                    <li><span>002</span></li>
                    <li><span>003</span></li>
                    <li><span>004</span></li>
                    <li><span>005</span></li>
                    <li><span>006</span></li>
                </ul>
            </section>
        );
    }
}

export class MainTopBar extends React.Component<undefined, undefined> {
    render() {
        return (
            <section className="topBar">
                <div className="topBarCenter">
                    <div className="logo">LYninG
                        <div className="author">月夜胜邪</div>
                    </div>
                    <div className="topBarItem">
                        <div className="selectTopBarBtn"><i className="iconfont">&#xe607;</i>首页</div>
                    </div>
                    <div className="topBarItem">
                        <div className="topBarBtn">
                            <i className="iconfont">&#xe606;</i>个人分类
                        </div>
                        <div className="personalSort">
                            <div className="personalSortItem">拼音首字母0-9</div>
                            <div className="personalSortItem">拼音首字母A-H</div>
                            <div className="personalSortItem">拼音首字母I-P</div>
                            <div className="personalSortItem">拼音首字母Q-Z</div>
                            <div className="personalSortItem">其他</div>
                        </div>
                    </div>
                    <div className="topBarItem">
                        <div className="topBarBtn"><i className="iconfont">&#xe604;</i>新人必读</div>
                    </div>
                    <div className="topBarItem">
                        <div className="topBarBtn"><i className="iconfont">&#xe605;</i>我的收藏</div>
                    </div>
                    <div className="topBarItem">
                        <div className="topBarBtn"><i className="iconfont">&#xe602;</i>留言板</div>
                    </div>
                </div>
                <div><i className="iconfont unlockTopBar">&#xe62e;&#xe619;</i></div>
            </section>
        );
    }
}

export class MainFooter extends React.Component<undefined, undefined> {
    render() {
        return (
            <section className="footer">
                <div className="footerLabel">
                    弃我去者，昨日之日不可留；
                    乱我心者，今日之日多烦忧。
                    <br/>
                    抽刀断水水更流，举杯销愁愁更愁。
                    人生在世不称意，明朝散发弄扁舟。
                </div>
            </section>
        );
    }
}

