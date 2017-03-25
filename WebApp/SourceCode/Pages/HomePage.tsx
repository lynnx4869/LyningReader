import * as React from 'react';

class HomePage extends React.Component<undefined, undefined> {
    render() {
        return (
            <div>
                <div className="login-bg"></div>
                <div>
                    <div className="login-panel">
                        <div className="login-title">
                            <div className="login-logo">LYninG
                                <div className="login-author">月夜胜邪</div>
                            </div>
                        </div>
                        <div className="login-form">
                            <div className="mt105">
                                <div className="login-label-title">用户名</div>
                                <input className="login-form-input" type="text"/>
                            </div>
                            <div className="mt1">
                                <div className="login-label-title">密码</div>
                                <input className="login-form-input" type="password"/>
                            </div>
                            <div className="mt1">
                                <div className="login-remember left">
                                    <input id="remrmber-checkbox" type="checkbox" />
                                    <label htmlFor="remrmber-checkbox"><i className="iconfont">&#xe63b; </i></label> 记住我的登录信息
                                </div>
                                <button className="login-btn right">登录</button>
                            </div>
                            <div className="login-forget-password mt5 left">
                                注册 | 忘记密码？
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;