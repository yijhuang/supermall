import {request} from './request.js'

export function getDetailData(iid){
    return request({
        url:'/detail',
        params:{
            iid,
        }
    })
} 

export function getRecommandData(){
    return request({
        url:'/recommend',

    })
}
export class BaseInfo{
    constructor(itemInfo,column,services){
        this.title = itemInfo.title;
        this.nPrice = itemInfo.price;
        this.oPrice = itemInfo.oldPrice;
        this.disc = itemInfo.discountDesc;
        this.column = column;
        this.services = services;
        this.price = itemInfo.highNowPrice;
    }
}

export class ShopInfo{
    constructor(shopInfo){
        this.shopLogo = shopInfo.shopLogo;
        this.shopName = shopInfo.name;
        this.shopUrl = shopInfo.shopUrl;
        this.cSells = shopInfo.cSells;
        this.cGoods = shopInfo.cGoods;
        this.score = shopInfo.score;
    }
}

export class ParamsInfo{
    constructor(info,rule){
        this.image = info.images?info.images:'';
        this.size = rule.tables;
        this.rule = info.set;
    }
}