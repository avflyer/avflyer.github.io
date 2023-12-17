/**
 * 系统配置
 * 取当前某个配置的方法：
 *        var zxwww = SawlCfg.zxwww[edition] ;
 *
 * @author dqm
 */
(function () {
    var global = this;
    var SawlCfg = {
        name: '增信网全局配置信息',
        edition: 'R',                                     // D：开发环境 T：测试环境 P:预发布（演示） R：生产环境
        zxwww: {
            name: '增信网后台接口地址',
            D: 'http://localhost:8080/www_war_exploded',
            T: 'https://test.deepsec.cn',
            P: 'https://demo.zengxin.com.cn',
            R: 'https://www.zengxin.com.cn',
        },
        deepchain: {
            name: '深安链API接口地址',
            D: 'http://deepchain.deepsec.cn:8088/api/',
            T: 'http://deepchain.deepsec.cn:8088/api/',
            P: 'http://deepchain.deepsec.cn:8088/api/',
            R: 'http://deepchain.deepsec.cn:8088/api/',
        },
        deepchain_browser: {
            name: '深安链浏览器地址接口地址',
            D: 'https://deepchain.zengxin.com.cn/prod/',
            T: 'https://deepchain.zengxin.com.cn/prod/',
            P: 'http://deepchain.zengxin.com.cn/prod/',
            R: 'https://deepchain.zengxin.com.cn/prod/',
        },
        entzn: {
            name: '区块链电子公证书系统',
            D: 'https://www.zengxin.com.cn/ntznvapi/',
            D2: 'https://www.zengxin.com.cn/api-entzn/',
            T: 'https://test.deepsec.cn/api-entzn/',
            P: 'http://demo.zengxin.com.cn/api-entzn/',
            // R: 'https://www.zengxin.com.cn/api-entzn/',
            R: 'https://www.zengxin.com.cn/ntznvapi/',
        },
        ceedss_b: {
            name: '增信存B端后台接口',
            D: 'http://localhost:8080/api-ceedss/',
            T: 'https://test.deepsec.cn/api-ceedss/',
            P: 'http://demo.zengxin.com.cn/api-ceedss/',
            R: 'https://www.zengxin.com.cn/api-ceedss/',
        },
        ceedss_n: {
            name: '增信存N端后台接口',
            D: 'http://localhost:8080/bjzx_ceedssms/',
            T: 'https://test.deepsec.cn/bjzx_ceedssms/',
            P: 'http://demo.zengxin.com.cn/bjzx_ceedssms/',
            R: 'https://www.zengxin.com.cn/bjzx_ceedssms/',
        },
        cenans_n: {
            name: '赋强N端后台接口',
            D: 'http://localhost:8080/bjzx_nans20/',
            T: 'https://test.deepsec.cn/bjzx_nans20/',
            P: 'http://demo.zengxin.com.cn/bjzx_nans20/',
            R: 'https://www.zengxin.com.cn/bjzx_nans20/',
        },
        oa: {
            name: '自建OA系统，运维平台',
            D: 'http://localhost:8080/oa/',
            T: 'https://test.deepsec.cn/oa/',
            P: 'http://demo.zengxin.com.cn/oa/',
            R: 'https://www.zengxin.com.cn/oa/',
        }


    };

    /**
     * expose
     */
    global.edition = SawlCfg.edition;
    global.SawlCfg = SawlCfg;

})();
