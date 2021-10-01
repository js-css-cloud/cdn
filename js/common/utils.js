/*****************************************tongji**************************************************** */
function tongji() {
    
}

var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4567546,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();
/*****************************************remind remeber**************************************************** */
function remindRemeber() {
    document.write('请记住本站域名：' + window.location.host.toLocaleUpperCase().replace(/[https*:\\]*WWW./,""));
}
/*****************************************UA判断**************************************************** */
var ua_type = 'android';
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone
            iPad: u.indexOf('iPad') > -1, //是否iPad
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

// document.writeln("<br>语言版本: "+browser.language);
// document.writeln("<br>是否为移动终端: "+browser.versions.mobile);
// document.writeln("<br>ios终端: "+browser.versions.ios);
// document.writeln("<br>android终端: "+browser.versions.android);
// document.writeln("<br>是否为iPhone: "+browser.versions.iPhone);
// document.writeln("<br>是否iPad: "+browser.versions.iPad);
// document.writeln("<br>"+navigator.userAgent);

if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
    // alert('苹果');
    ua_type = 'ios';
} else if (browser.versions.android) {
    //   alert('安卓');
    ua_type = 'android';
} else {
    //   alert('其他');
    ua_type = 'pc';
}
console.log(ua_type);


/*****************************************提醒收藏**************************************************** */
function remindCollection() {
    document.writeln("<div id=\"weixin-tip\" class=\"weixin-tip\"><p><img src=\"/images/live_weixin.png\"/><span id=\"close\" class=\"close\">关闭</span></p></div>");
    document.writeln("<div id=\"android-tip\" class=\"mytip\"><p><img src=\"/images/android.png\"/><span class=\"close\" class=\"close\">关闭</span></p></div>");
    document.writeln("<div id=\"iphone-tip\" class=\"mytip\"><p><img src=\"/images/iphone.png\"/><span class=\"close\" class=\"close\">关闭</span></p></div>");
    var is_weixin = (function () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    })();

    window.onload = function () {
        var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
        var btn = document.getElementsByTagName('a');
        var tip = document.getElementById('weixin-tip');
        var close = document.getElementById('close');

        if (is_weixin) {

            for (var i = 0; i < btn.length; i++) {
                btn[i].onclick = function (e) {

                    tip.style.height = winHeight + 'px';

                    tip.style.display = 'block';

                    return false;

                }
            }
            close.onclick = function () {
                tip.style.display = 'none';
            }
        }
    }

    var android_btn = document.getElementById('android-tip');
    var iphone_btn = document.getElementById('iphone-tip');
    var close_btn = document.getElementsByClassName('close');
    var tap_to_close = document.getElementsByClassName('mytip');
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1,  //是否为iPhone
                iPad: u.indexOf('iPad') > -1,  //是否iPad
            };
        }(),
    }

    var visited = getCookie('visited');
    if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {

        if (visited == '') {
            //        没有cookie,设置
            setCookie('visited', '1', 600);
            iphone_btn.style.display = 'block';
        }

    }
    if (browser.versions.android) {

        if (visited == '') {
            //        没有cookie,设置
            setCookie('visited', '1', 600);
            android_btn.style.display = 'block';
        }

    }
    var i;
    for (i = 0; i < close_btn.length; i++) {
        close_btn[i].onclick = function () {
            iphone_btn.style.display = 'none';
            android_btn.style.display = 'none';
        }
    }
    var j;
    for (j = 0; j < tap_to_close.length; j++) {
        tap_to_close[j].onclick = function () {
            iphone_btn.style.display = 'none';
            android_btn.style.display = 'none';
        }
    }
    

    //设置cookie
    function setCookie(c_name, value, expiredays) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = c_name + "=" + escape(value) +
            ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
    }
    //读取cookie
    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return "";
    }

};

/*****************************************一个检测国内外浏览器版本的前端 js 库**************************************************** */
(function () {
    var packageName = 'whyun';
    if (!window[packageName]) {
        window[packageName] = {};
    }
    var MAX_360_CHROME_VERSION = 69;//以360极速浏览器的最大内核版本为准
    function getIOSVersion(ua) {
        if (/cpu (?:iphone )?os (\d+_\d+)/.test(ua)) {
            return parseFloat(RegExp.$1.replace("_", "."));
        } else {
            return 2;
        }
    }
    function _mime(where, value, name, nameReg) {
        var mimeTypes = window.navigator.mimeTypes,
            i;

        for (i in mimeTypes) {
            if (mimeTypes[i][where] == value) {
                if (name !== undefined && nameReg.test(mimeTypes[i][name])) return !0;
                else if (name === undefined) return !0;
            }
        }
        return !1;
    }
    var browser360 = {
        result: "Chrome",
        details: {
            Chrome: 5,
            Chromium: 0,
            _360SE: 0,
            _360EE: 0
        },
        sorted: ["Chrome", "360SE", "360EE", "Chromium"],
        check: function () {
            var init = {
                Chrome: 5,
                Chromium: 0,
                _360SE: 0,
                _360EE: 0
            };


            var plugins = window.navigator.plugins;


            var webstore = window.chrome.webstore;
            var webstoreLen = Object.keys(webstore).length;
            var pluginsLen = plugins.length;

            if (window.clientInformation.languages ||
                (init._360SE += 8), /zh/i.test(navigator.language) &&
                (init._360SE += 3, init._360EE += 3), window.clientInformation.languages) {
                var lanLen = window.clientInformation.languages.length;
                if (lanLen >= 3) {
                    (init.Chrome += 10, init.Chromium += 6);
                } else if (2 == lanLen) {
                    init.Chrome += 3, init.Chromium += 6, init._360EE += 6;
                } else if (1 == lanLen) {
                    init.Chrome += 4, init.Chromium += 4;
                }

            }
            var pluginFrom,
                maybe360 = 0;
            for (var r in plugins) {
                if (pluginFrom = /^(.+) PDF Viewer$/.exec(plugins[r].name)) {
                    if ("Chrome" == pluginFrom[1]) {
                        init.Chrome += 6,
                            init._360SE += 6,
                            maybe360 = 1;

                    } else if ("Chromium" == pluginFrom[1]) {
                        init.Chromium += 10,
                            init._360EE += 6,
                            maybe360 = 1;

                    }
                } else if ("np-mswmp.dll" == plugins[r].filename) {
                    init._360SE += 20, init._360EE += 20;
                }
            }

            maybe360 || (init.Chromium += 9);
            if (webstoreLen <= 1) {
                init._360SE += 7;
            } else {
                init._360SE += 4;
                init.Chromium += 3;
                if (pluginsLen >= 30) {
                    init._360EE += 7, init._360SE += 7, init.Chrome += 7;
                } else if (pluginsLen < 30 && pluginsLen > 10) {
                    init._360EE += 3, init._360SE += 3, init.Chrome += 3;
                } else {
                    init.Chromium += 6;
                }
            }


            var m = new Object();
            m.Chrome = init.Chrome,
                m.Chromium = init.Chromium,
                m["360SE"] = init._360SE,
                m["360EE"] = init._360EE;
            var s = [];
            for (var u in m) {
                s.push([u, m[u]]);
            }
            s.sort(function (e, i) {
                return i[1] - e[1]
            });
            this.sorted = s;
            this.details = init;
            this.result = s[0][0] || '';

            return this.result.toLowerCase();
        }

    };
    /**
     * 获取 Chromium 内核浏览器类型
     * @link http://www.adtchrome.com/js/help.js
     * @link https://ext.chrome.360.cn/webstore
     * @link https://ext.se.360.cn
     * @return {String}
     *         360ee 360极速浏览器
     *         360se 360安全浏览器
     *         sougou 搜狗浏览器
     *         liebao 猎豹浏览器
     *         chrome 谷歌浏览器
     *         ''    无法判断
     */
    function _getChromiumType(version) {
        if (window.scrollMaxX !== undefined) return '';

        var doc = document;
        var _track = 'track' in doc.createElement('track'),
            appVersion = window.navigator.appVersion,
            external = window.external;

        // 搜狗浏览器
        if (external && 'SEVersion' in external) return 'sougou';

        // 猎豹浏览器
        if (external && 'LiebaoGetVersion' in external) return 'liebao';

        if (/QQBrowser/.test(appVersion)) {//qq浏览器
            return 'qq';
        }
        if (/Maxthon/.test(appVersion)) {//遨游浏览器
            return 'maxthon';
        }
        if (/TaoBrowser/.test(appVersion)) {//淘宝浏览器
            return 'taobao';
        }
        if (/BIDUBrowser/.test(appVersion)) {//百度浏览器
            return 'baidu';
        }
        if (/UBrowser/.test(appVersion)) {//UC浏览器
            return 'uc';
        }

        if (
            (/\sOPR\//.test(appVersion))
            || (/Opera/.test(appVersion))
            || (window.navigator.vendor && window.navigator.vendor.indexOf('Opera') === 0)
        ) {//opera
            return 'opera';
        }
        // chrome
        // if (window.clientInformation && window.clientInformation.languages && window.clientInformation.languages.length > 2) {
        //     return 'chrome';
        // }
        var p = navigator.platform.toLowerCase();
        if (p.indexOf('mac') == 0 || p.indexOf('linux') == 0) {
            return 'chrome';
        }
        if (parseInt(version) > MAX_360_CHROME_VERSION) {
            return 'chrome';
        }
        // var webstoreKeysLength = window.chrome && window.chrome.webstore ? Object.keys(window.chrome.webstore).length : 0;
        // if (_track) {
        //     // 360极速浏览器
        //     // 360安全浏览器
        //     return webstoreKeysLength > 1 ? '360ee' : '360se';
        // }


        return browser360.check();
    }
    var client = function () {
        var browser = {};

        var ua = navigator.userAgent.toLowerCase();
        var s;
        if (s = ua.match(/rv:([\d.]+)\) like gecko/)) {
            browser.name = 'ie';
            browser['ie'] = s[1];
        } else if (s = ua.match(/msie ([\d.]+)/)) {
            browser.name = 'ie';
            browser['ie'] = s[1];
        }
        else if (s = ua.match(/edge\/([\d.]+)/)) {
            browser.name = 'edge';
            browser['edge'] = s[1];
        }
        else if (s = ua.match(/firefox\/([\d.]+)/)) {
            browser.name = 'firefox';
            browser['firefox'] = s[1];
        }
        else if (s = ua.match(/chrome\/([\d.]+)/)) {
            browser.name = 'chrome';
            browser['chrome'] = s[1];
            var type = _getChromiumType(browser['chrome']);
            if (type) {
                browser['chrome'] += '(' + type + ')';
            }
        }
        else if (s = ua.match(/opera.([\d.]+)/)) {
            browser.name = 'opera';
            browser['opera'] = s[1];
        }
        else if (s = ua.match(/version\/([\d.]+).*safari/)) {
            browser.name = 'safari';
            browser['safari'] = s[1];
        } else {
            browser.name = 'unknown';
            browser['unknow'] = 0;
        }

        var system = {};

        //detect platform
        //        var p = navigator.platform.toLowerCase();
        if (ua.indexOf('iphone') > -1) {
            system.name = 'iphone';
            system.iphone = getIOSVersion(ua);
        } else if (ua.indexOf('ipod') > -1) {
            system.name = 'ipod';
            system.ipod = getIOSVersion(ua);
        } else if (ua.indexOf('ipad') > -1) {
            system.name = 'ipad';
            system.ipad = getIOSVersion(ua);
        } else if (ua.indexOf('nokia') > -1) {
            system.name = 'nokia';
            system.nokia = true;
        } else if (/android (\d+\.\d+)/.test(ua)) {
            system.name = 'android';
            system.android = parseFloat(RegExp.$1);
        } else if (ua.indexOf("win") > -1) {
            system.name = 'win';

            if (/win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
                if (RegExp["$1"] == "nt") {
                    switch (RegExp["$2"]) {
                        case "5.0":
                            system.win = "2000";
                            break;
                        case "5.1":
                            system.win = "XP";
                            break;
                        case "6.0":
                            system.win = "Vista";
                            break;
                        case "6.1":
                            system.win = "7";
                            break;
                        case "6.2":
                            system.win = "8";
                            break;
                        case "6.3":
                            system.win = "8.1";
                            break;
                        case '10.0':
                            system.win = '10';
                            break;
                        default:
                            system.win = "NT";
                            break;
                    }
                } else if (RegExp["$1"] == "9x") {
                    system.win = "ME";
                } else {
                    system.win = RegExp["$1"];
                }
            }

        } else if (ua.indexOf("mac") > -1) {
            system.name = 'mac';
        } else if (ua.indexOf('linux') > -1) {
            system.name = 'linux';
        }
        var str = system.name + (system[system.name] || '') + '|' + browser.name + browser[browser.name];
        var isMobile = system.android || system.iphone || system.ios || system.ipad || system.ipod || system.nokia;

        return {
            browser: browser,
            system: system,
            isMobile: isMobile,
            string: str
        };
    }();
    window[packageName]['browser'] = client;
})();




/*****************************************clickcount**************************************************** */
function clickcount(image_area, image_type, image_location, visit_front_end) {
    var ua = navigator.userAgent;
    // var brower = Browser.client.name;
    var browser = whyun.browser.string;
    // document.getElementById('info').innerHTML = '浏览器：'+ JSON.stringify( browser.browser) + ',操作系统：'+ JSON.stringify( browser.system)+'<br/>'+browser.string;
    // brower{"name":"safari","safari":"11.0"},操作系统：{"name":"iphone","iphone":11} iphone11|safari11.0
    // console.log("browser="+browser); //browser=android5|chrome77.0.3865.90(chrome)
    var referrer_url = window.location.host;
    var req_url = "https://181vp.top/?"
        + "visit_front_end=" + visit_front_end
        + "&referrer_url=" + referrer_url
        + "&ad_area=" + image_area
        + "&ad_type=" + image_type
        + "&main_site=5"
        + "&image_location=" + image_location
        + "&user_agent=" + ua
        + "&browser=" + browser;
    // console.log("req_url="+req_url);
    $.ajax({
        type: 'POST',
        url: req_url,
        context: this,
        success: function (req_url) {
            //console.log('okay');
        },
        error: function () {
            console.log('有问题，请检查');
        }
    });
};


