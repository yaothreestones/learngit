function login() {
    var WxURL = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
        'appid=wx0b31bcd6cbe880a4' +
        '&redirect_uri=http://home.funlearn.pangu.ptteng.com' +
        '?type=wx' +
    '&response_type=code' +
    '&scope=snsapi_userinfo' +
    '&state=STATE' +
    '#wechat_redirect';
    window.location.href = WxURL
};

