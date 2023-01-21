/*
version     v1.0.0
updatetime  2023-01-21
function    零跑去除无用页面 自用
author      ddgksf2013
*/
var obj = JSON.parse($response.body);
if (/^https:\/\/apptec\.leapmotor\.com\/appNewInterface\/getAppStartPageInfo/.test($request.url)) {

    obj.data[0].imgUrl ="";
    obj.data[0].contentUrl = "";
    obj.data[0].showTime = "0"
    $done({body: JSON.stringify(obj)});
}

if (/^https:\/\/apptec\.leapmotor\.com\/app-community\/appColumnActivity\/list*/.test($request.url)) {
    obj.data = [];
    $done({body: JSON.stringify(obj)});
}
if (/^https:\/\/apptec\.leapmotor\.com\/app-community\/appZeroTab\/*/.test($request.url)) {
    obj.data = [];
    $done({body: JSON.stringify(obj)});
}

if (/https:\/\/apptec\.leapmotor\.com\/app-community\/resourceConfig\/getByCode*/.test($request.url)) {
    obj.data.TAB = [{
        "title": "推荐",
        "type": 0
    }];
    $done({body: JSON.stringify(obj)});
}
if (/^https:\/\/mallapi\.leapmotor\.com\/api\/products\/new/.test($request.url)) {
    obj.data = [];
    $done({body: JSON.stringify(obj)});
}

if (/^https:\/\/apptec\.leapmotor\.com\/app-community\/resourceConfig\/getListByCodes*/.test($request.url)) {
    obj.data['APP-001'] = [];
    obj.data['APP-002'] = [];
    obj.data['APP-003'] = [];
    obj.data['APP-004'] = [];
    obj.data['APP-005'] = [];
    obj.data['APP-006'] = [];
    $done({body: JSON.stringify(obj)});
}
