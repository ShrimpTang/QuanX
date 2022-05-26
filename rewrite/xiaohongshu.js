/*

QX:
[rewrite_local]
#移除小红书开屏广告 要是有缓存过需要卸载APP重装
^https:\/\/edith\.xiaohongshu\.com\/api\/sns\/v2\/system_service\/splash_config url script-response-body https://raw.githubusercontent.com/ShrimpTang/QuanX/main/rewrite/xiaohongshu.js
[mitm]
hostname = apptec.leapmotor.com

*/
let obj = JSON.parse($response.body);
data.data.hot_interval = 99999999999;
data.data.per_day_max_show = 0;
data.data.layout.skip_button.font_size = 99;
data.data.ads_groups.forEach(ag=>{
    ag.end_time = "0";
    ag.start_time="9999999999999";
    ag.min_interval = "9999999999999";
    for (let i = 0; i < ag.show_queue.length; i++) {
        ag.show_queue[i] = "-1";
    }
    ag.ads.forEach(ad=>{
        ad.max_show_num=0;
        ad.resource_url = "";
        ad.start_time = "9999999999999";
        ad.duration = "0";
        ad.end_time = "0";

    });
})
$done({body: JSON.stringify(obj)});