'use strict';
var BASE = 'http://www.zhcc717.com/market/mobile/';
function api(api, v){
	if(v instanceof Object){
		var p = Object.keys(v).map(function(k) {
			return encodeURIComponent(k) + "=" + encodeURIComponent(v[k]);
		}).join('&');
	}else if(v){
		var p = v;
  }else{
    var p ='';
	}
	return BASE + api;
}

function getShuCais(){
	return api('goodsList.do',{'oid':'f2573e864e49d503014e58c10c170165',
                               'order':'asc',
                               'orderType':'0',
                               'pageNumber':'1',
                               'pageSize':'20'}
               );
}

function getMeats(){

   return api('goodsList.do',{'oid':'f2573e864e49d503014e58c1d18a017b',
                               'order':'asc',
                               'orderType':'0',
                               'pageNumber':'1',
                               'pageSize':'20'}
               );




}


module.exports = {

	ShuCais: getShuCais,
	Meats:getMeats,


};
