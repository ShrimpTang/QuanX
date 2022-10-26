/*
{
"code": 200,
"data": {
"Img": "https://app.meruki.cn/data/Upload/af8d4209ff04e138d3a195cd076796bd.jpg",
"WaitSecond": 5,
"Open": true,
"Url": "https://www.doorzo.app/?n=Sig.Front.AppFront.RecommendDetailH5&id=5331"
}

QX:
[rewrite_local]
#移除挖煤姬开屏广告 要是有缓存过可能需要卸载APP重装
^https:\/\/app\.meruki\.cn\/?n=Sig\.Front\.AppFront\.GetOpenAd* url script-response-body https://raw.githubusercontent.com/ShrimpTang/QuanX/main/rewrite/wameiji.js

[mitm]
hostname = app.meruki.cn

*/

let obj = JSON.parse($response.body);
obj.data.WaitSecond =0;
obj.data.Open =false;
obj.data.Img ="";
obj.data.Url ="";
$done({body: JSON.stringify(obj)});