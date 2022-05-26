/*

QX:
[rewrite_local]
#移除零跑开屏广告 要是有缓存过需要卸载APP重装
^https:\/\/apptec\.leapmotor\.com\/appNewInterface\/getAppStartPageInfo url script-response-body https://raw.githubusercontent.com/ShrimpTang/QuanX/main/rewrite/leapmotor.js

[mitm]
hostname = apptec.leapmotor.com

*/

let obj = JSON.parse($response.body);
obj.data[0].imgUrl ="";
obj.data[0].contentUrl = "";
obj.data[0].showTime = "0"
$done({body: JSON.stringify(obj)});