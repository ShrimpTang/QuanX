/*

QX:
[rewrite_local]
#解锁会员
^https:\/\/apptec.leapmotor.com\/appNewInterface\/getAppStartPageInfo url script-response-body

[mitm]
hostname = apptec.leapmotor.com

*/

let obj = JSON.parse($response.body);
obj.imgUrl ="";
obj.contentUrl = "";
obj.showTime = "0"
$done({body: JSON.stringify(obj)});