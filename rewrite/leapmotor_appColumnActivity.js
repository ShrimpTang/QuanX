/*

QX:
[rewrite_local]
#移除零跑开屏广告 要是有缓存过需要卸载APP重装
^https:\/\/apptec\.leapmotor\.com\/app-community\/appColumnActivity\/list* url script-response-body https://raw.githubusercontent.com/ShrimpTang/QuanX/main/rewrite/leapmotor_appColumnActivity.js

[mitm]
hostname = apptec.leapmotor.com

*/

let obj = JSON.parse($response.body);
obj.data = [];
$done({body: JSON.stringify(obj)});