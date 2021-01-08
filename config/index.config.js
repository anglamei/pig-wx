const CONFIG = {
    // 开发环境配置
    development: {
        assetsPath: '/static', // 静态资源路径
        baseUrl: 'http://192.168.1.234', // 后台接口请求地址
        hostUrl: 'http://192.168.1.234', // H5地址(前端运行地址)
        weixinAppId: 'wx6832be859d0e1cf5' // 微信公众号appid
    },
    // 生产环境配置
    production: {
        assetsPath: '/static', // 静态资源路径
        baseUrl: '', // 后台接口请求地址
        hostUrl: '', // H5地址(前端运行地址)
        weixinAppId: 'wx6832be859d0e1cf5' // 微信公众号appid
    }
};

export default CONFIG[process.env.NODE_ENV];
