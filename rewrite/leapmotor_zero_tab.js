/*

QX:
[rewrite_local]
#移除零跑开屏广告 要是有缓存过需要卸载APP重装
^https:\/\/apptec\.leapmotor\.com\/app-community\/appZeroTab\/* url script-response-body https://raw.githubusercontent.com/ShrimpTang/QuanX/main/rewrite/leapmotor_zero_tab.js

[mitm]
hostname = apptec.leapmotor.com

*/

let obj = JSON.parse($response.body);
obj.data.total = 0;
obj.data.rows = [];
$done({body: JSON.stringify(obj)});