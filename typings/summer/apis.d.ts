declare module "summer" {
    /** user */
    export namespace APIs.user {
        /** 获取用户信息 */
        export function getUserInfo (
            data?:{

            }
        ): Promise<{
                meta?: {
                    code?: number;
                    msg?: string;
                };
                data?: {
                    /** 账号名 */
                    account?: string;
                    /** 生日 */
                    birthday?: string;
                    /** 淘宝账号(旺旺) */
                    taobao_account?: string;
                    /** 头像 */
                    avatar?: string;
                    id?: string;
                    /** 顶部简介背景 */
                    banner?: string;
                    /** 真实姓名 */
                    name?: string;
                    /** qq账号 */
                    qq?: string;
                };
            }>;
    }
    /** 采购单 */
    export namespace APIs.order {
        /** 获取采购单列表 */
        export function getOrderList (
            data?:{
                /** 采购单状态 */
                status?: number;
                /** 请求信息 */
                block_info?: {
                    /** 当前列表请求index */
                    index?: number;
                    /** 每次请求返回的最大结果数量 */
                    size?: number;
                };
            }
        ): Promise<{
                data?: {
                    results?: {
                        image?: string;
                        /** 城市 */
                        city?: string;
                        u_id?: string;
                        /** 完成数量 */
                        completed?: number;
                        title?: string;
                    }[];
                };
                meta?: {
                    msg?: string;
                    code?: number;
                };
            }>;
        /** 获取采购单信息 */
        export function getOrderInfo (
            data?:{
                u_id?: string;
            }
        ): Promise<{
                meta?: {
                    code?: number;
                    msg?: string;
                };
                data?: {
                    results?: {
                        /** 单条标题 */
                        title?: string;
                        /** 采购单内单条id */
                        u_id?: string;
                    }[];
                };
            }>;
    }
    /** 市场数据相关接口 */
    export namespace APIs.market {
        /** 获取 店铺/档口 信息 */
        export function getShopList (
            data?:{
                /** 请求信息 */
                block_info?: {
                    /** 当前列表请求index */
                    index?: number;
                    /** 每次请求返回的最大结果数量 */
                    size?: number;
                };
                /** 城市(id) */
                city?: string;
            }
        ): Promise<{
                data?: {
                    results?: {
                        /** 分类 */
                        category?: string;
                        /** 档口简介 */
                        description?: string;
                        u_id?: string;
                        price?: number;
                        /** 主营 */
                        main?: string;
                        /** 提供服务 */
                        service?: string[];
                        image?: string;
                        /** 档口名称 */
                        title?: string;
                        /** 标签 */
                        tags?: string[];
                    }[];
                };
                meta?: {
                    msg?: string;
                    code?: number;
                };
            }>;
        /** 获取店铺/档口信息 */
        export function getShopInfo (
            data?:{
                id?: string;
            }
        ): Promise<{
                data?: {
                    /** 二维码名片 */
                    qr_code?: string;
                    /** 收藏 */
                    fav?: boolean;
                    u_id?: string;
                    /** qq账号 */
                    qq?: string;
                    /** 地区 */
                    area?: string;
                    /** 档口名称 */
                    title?: string;
                    /** 主营 */
                    main?: string;
                    /** 分类 */
                    category?: string;
                    /** 档口头像 */
                    avatar?: string;
                    /** 联系方式 */
                    contact?: string;
                    /** 淘宝账号(旺旺) */
                    taobao_account?: string;
                    /** 服务 */
                    service?: string[];
                    /** banner图 */
                    banner?: string;
                };
                meta?: {
                    msg?: string;
                    code?: number;
                };
            }>;
        /** 获取 店铺/档口 商品 */
        export function getShopGoodsList (
            data?:{
                /** 请求信息 */
                block_info?: {
                    /** 每次请求返回的最大结果数量 */
                    size?: number;
                    /** 当前列表请求index */
                    index?: number;
                };
                u_id?: string;
            }
        ): Promise<{
                meta?: {
                    msg?: string;
                    code?: number;
                };
                data?: {
                    results?: {
                        price?: number;
                        /** 宝贝名称 */
                        title?: string;
                        u_id?: string;
                        image?: string;
                    }[];
                };
            }>;
        /** 收藏档口/店铺 */
        export function postShopFavAdd (
            data?:{
                u_id?: string;
            }
        ): Promise<{
                meta?: {
                    msg?: string;
                    code?: number;
                };
                data?: {

                };
            }>;
        /** 移除收藏档口/店铺 */
        export function postShopFavRemove (
            data?:{
                u_id?: string;
            }
        ): Promise<{
                data?: {

                };
                meta?: {
                    code?: number;
                    msg?: string;
                };
            }>;
    }
    /** 用户账号相关接口 */
    export namespace APIs.account {
        /** 用户注销登录 */
        export function getLogout (
            data?:{

            }
        ): Promise<{
                meta?: {
                    msg?: string;
                    code?: number;
                };
                data?: {

                };
            }>;
        /** 用户登录接口 */
        export function postLogin (
            data?:{
                /** 账号 */
                account?: string;
                /** 密码 */
                password?: string;
            }
        ): Promise<{
                meta?: {
                    /** 状态码 */
                    code?: number;
                    /** 返回信息 */
                    msg?: string;
                };
                /** 返回数据 */
                data?: {
                    token?: string;
                };
            }>;
        /** 修改账号密码 */
        export function postPasswordReset (
            data?:{
                /** 新密码 */
                password?: string;
            }
        ): Promise<{
                meta?: {
                    code?: number;
                    msg?: string;
                };
                data?: {

                };
            }>;
        /** 注册新用户 */
        export function postRegister (
            data?:{
                /** 注册手机号 */
                mobile?: number;
                /** 密码 */
                password?: string;
            }
        ): Promise<{
                meta?: {
                    code?: number;
                    msg?: string;
                };
                data?: {

                };
            }>;
        /** 获取短信验证码 */
        export function getIdentificationCode (
            data?:{
                /** 用户手机号码 */
                mobile?: string;
            }
        ): Promise<{
                data?: {

                };
                meta?: {
                    code?: number;
                    msg?: string;
                };
            }>;
        /** 提交短信验证码 */
        export function postIdentificationCode (
            data?:{
                /** 验证码 */
                code?: number;
                /** 验证码类型(重设密码 注册) */
                type?: number;
            }
        ): Promise<{
                data?: {
                    /** 验证结果(1: 成功, 0: 失败) */
                    status?: number;
                };
                meta?: {
                    msg?: string;
                    code?: number;
                };
            }>;
    }
    /** 商品/宝贝 模块 */
    export namespace APIs.goods {
        /** 获取 商品/宝贝 信息 */
        export function getGoodsInfo (
            data?:{
                id?: string;
            }
        ): Promise<{
                meta?: {
                    msg?: string;
                    code?: number;
                };
                data?: {
                    /** 所属店铺/档口名 */
                    shop_name?: string;
                    /** 地区 */
                    area?: string;
                    u_id?: string;
                    /** 分类 */
                    category?: string;
                    /** 收藏 */
                    fav?: boolean;
                    /** 图片 */
                    banner?: string[];
                    /** 价格 */
                    price?: number;
                    /** 淘宝价格 */
                    taobao_price?: number;
                    /** 商品名称 */
                    title?: string;
                    /** 所属店铺/档口(id) */
                    shop_id?: string;
                };
            }>;
        /** 获取  商品/宝贝 列表 */
        export function getGoodsList (
            data?:{
                u_id?: string;
                /** 请求信息 */
                block_info?: {
                    /** 每次请求返回的最大结果数量 */
                    size?: number;
                    /** 当前列表请求index */
                    index?: number;
                };
            }
        ): Promise<{
                meta?: {
                    msg?: string;
                    code?: number;
                };
                data?: {
                    results?: {
                        price?: number;
                        /** 宝贝名称 */
                        title?: string;
                        image?: string;
                        u_id?: string;
                    }[];
                };
            }>;
        /** 获取 商品/宝贝 图片 */
        export function getGoodsImages (
            data?:{
                /** 请求信息 */
                block_info?: {
                    /** 当前列表请求index */
                    index?: number;
                    /** 每次请求返回的最大结果数量 */
                    size?: number;
                };
                u_id?: string;
            }
        ): Promise<{
                data?: {
                    results?: string[];
                };
                meta?: {
                    code?: number;
                    msg?: string;
                };
            }>;
        /** 收藏 商品/宝贝 */
        export function postGoodsFavAdd (
            data?:{
                u_id?: string;
            }
        ): Promise<{
                data?: {

                };
                meta?: {
                    code?: number;
                    msg?: string;
                };
            }>;
        /** 移除收藏 商品/宝贝 */
        export function postGoodsFavRemove (
            data?:{
                u_id?: string;
            }
        ): Promise<{
                meta?: {
                    msg?: string;
                    code?: number;
                };
                data?: {

                };
            }>;
    }
    /** home */
    export namespace APIs.home {
        /** 获取  首页广告 列表 */
        export function getAdvertList (
            data?:{

            }
        ): Promise<{
                meta?: {
                    code?: number;
                    msg?: string;
                };
                data?: {
                    A1?: {
                        title?: string;
                        category?: string;
                        u_id?: string;
                        image?: string;
                        main?: string;
                        price?: number;
                        service?: string[];
                        description?: string;
                        tags?: string[];
                    }[];
                    A3?: {
                        list?: {
                            main?: string;
                            tags?: string[];
                            category?: string;
                            image?: string;
                            title?: string;
                            u_id?: string;
                            price?: number;
                            description?: string;
                            goods_id?: string;
                            service?: string[];
                        }[];
                        header?: {
                            image?: string;
                            shop_id?: string;
                        };
                    };
                    A5?: {
                        header?: {
                            image?: string;
                            shop_id?: string;
                        };
                        list?: {
                            u_id?: string;
                            title?: string;
                            service?: string[];
                            price?: number;
                            goods_id?: string;
                            category?: string;
                            tags?: string[];
                            main?: string;
                            image?: string;
                            description?: string;
                        }[];
                    }[];
                    A4?: {
                        header?: {
                            image?: string;
                            shop_id?: string;
                        };
                        list?: {
                            goods_id?: string;
                            category?: string;
                            title?: string;
                            tags?: string[];
                            price?: number;
                            service?: string[];
                            description?: string;
                            image?: string;
                            main?: string;
                            u_id?: string;
                        }[];
                    };
                    A2?: {
                        header?: {
                            shop_id?: string;
                            image?: string;
                        };
                        list?: {
                            goods_id?: string;
                            description?: string;
                            service?: string[];
                            category?: string;
                            main?: string;
                            price?: number;
                            title?: string;
                            tags?: string[];
                            image?: string;
                            u_id?: string;
                        }[];
                    };
                };
            }>;
    }
    /** search */
    export namespace APIs.search {
        /** 获取 搜款式/商品列表 信息 */
        export function getSearchGoodsList (
            data?:{
                /** 城市(id) */
                city?: string;
                /** 请求信息 */
                block_info?: {
                    /** 每次请求返回的最大结果数量 */
                    size?: number;
                    /** 当前列表请求index */
                    index?: number;
                };
            }
        ): Promise<{
                meta?: {
                    code?: number;
                    msg?: string;
                };
                data?: {
                    results?: {
                        price?: number;
                        image?: string;
                        u_id?: string;
                        title?: string;
                    }[];
                };
            }>;
    }
}
