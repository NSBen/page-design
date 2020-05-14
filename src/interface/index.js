export const design_get_component_list = function () {
    const list = [
        {
            "id":242,
            "category_id":26,
            "component_key":"U000242",
            "name":"标题栏",
            "description":"原生APP标题",
            "tpl_id":508,
            "icon":"ui-component-title",
            "tplList":[
                {
                    "id":508,
                    "name_en":"template1",
                    "name":"模版一",
                    "pic":"https://geshop.s3.amazonaws.com/uploads/Y0T8qXBAeNgdFJ7fWmLornzu2j93ZEO5.png",
                    "component_key":"U000242",
                }
            ]
        },
        {
            "id":243,
            "category_id":32,
            "component_key":"U000243",
            "name":"广告轮播",
            "description":"原生banner",
            "tpl_id":509,
            "icon":"ui-component-banner",
            "tplList":[
                {
                    "id":509,
                    "name_en":"template1",
                    "name":"模版一",
                    "pic":"https://geshop.s3.amazonaws.com/uploads/GYo62Hnjmri0cvIZqWQyFUJDEgR4tdzs.png",
                    "component_key":"U000243",
                }
            ]
        },
        {
            "id":245,
            "category_id":24,
            "component_key":"U000245",
            "name":"商品列表",
            "description":"原生-商品列表",
            "tpl_id":511,
            "icon":"ui-component-goodslist",
            "tplList":[
                {
                    "id":511,
                    "name_en":"template1",
                    "name":"一行两列",
                    "pic":"https://geshop.s3.amazonaws.com/uploads/28pdSPkuvlQ9X1gZzqYTNeKbsJ7t5ioc.png",
                    "component_key":"U000245",
                }
            ]
        },
        {
            "id":248,
            "category_id":32,
            "component_key":"U000248",
            "name":"属性筛选",
            "description":"APP - 属性筛选",
            "tpl_id":548,
            "icon":"ui-component-filter",
            "tplList":[
                {
                    "id":548,
                    "name_en":"template1",
                    "name":"模版一",
                    "pic":"https://geshoptest.s3.amazonaws.com/uploads/f2ukAarEc4SMne09dIPlTND5xyChtYJb.png",
                    "component_key":"U000248",
                }
            ]
        },
        {
            "id":251,
            "category_id":24,
            "component_key":"U000251",
            "name":"单时段秒杀",
            "description":"APP-单时段秒杀",
            "logo_url":"https://geshop.s3.amazonaws.com/uploads/yHmZR7icaKzVg1onlheYGq4Fx8XkD2Mr.png",
            "tpl_id":552,
            "icon":"ui-component-miaosha",
            "tplList":[
                {
                    "id":552,
                    "name_en":"template1",
                    "name":"横向滚动",
                    "pic":"https://geshop.s3.amazonaws.com/uploads/32wKyLiZuljEaSsBXgqAPeCtUm57pY9h.png",
                    "component_key":"U000251",
                },
                {
                    "id":553,
                    "name_en":"template2",
                    "name":"垂直列表",
                    "pic":"https://geshop.s3.amazonaws.com/uploads/Gl6YdO4nKWJB3m7yzkIDPMN2heRagVHT.png",
                    "component_key":"U000251",
                }
            ]
        }
    ];

    return new Promise((resolve, reject) => {
        resolve(list);
    });
}

/**
 * 装修页面数据
 */
export const design_get_page_info = function () {
    return new Promise((resolve, reject) => {
        const res = {"code":0,"message":"success","data":{"pageTitle":"蜘蛛侠-原生","lang":"en","languages":{"claimed_success":"Claimed successfully","all_claimed":"All claimed","claim":"Claim","left":"Left","off":"OFF","already_ended":"Already Ended","down_ends":"Ends In1","down_starts":"Starts In1","left_piece":"only XX left","sold":"claimed","shop_it":"SHOP IT","buy_now":"BUY NOW1","share_it":"Share it","see_more":"see more","yesterday":"Yesterday","today":"Today","tomorrow":"Tomorrow","coming_soon":"Coming Soon","on_going":"Ongoing","btn_buy_now":"BUY NOW1","btn_coming_soon":"COMING SOON","btn_ended":"ENDED","btn_sold_out":"SOLD OUT1","success_text":"Coupon Received","un_received":"Claim Now","received":"Already Received","failed":"UNAVAILABLE","free_shipping":"Free Shipping","hour":"h","minute":"m","second":"s","coupon_all_category":"SITE-WIDE COUPONS","coupon_category_only":"<% d.category %> Category Only","coupon_points":"Cost: <% d.integral %> Points","coupon_off_only":"OFF","coupon_justfor":"Just for product:","coupon_valid":"Valid for <% d.validDays %> day(s) after received","coupon_coming_soon":"Up Coming","coupon_can_get":"Grab It!","coupon_can_use":"Use it","coupon_unable":"Unavailable","coupon_dialog_title":"Congrats!","coupon_received":"Already Received","coupon_success_text":"coupon-received successfully","btn_check":"CHECK","btn_shop_now":"SHOP NOW","gift_start":"FREE GIFTS FOR ORDERS OVER","gift_left":"LEFT","gift_sold_out":"1All Gifts Claimed","gift_sold":"Claimed","gift_add_cart":"1Gift added to your shopping bag !","flash_sale":"Flash Sale","quick_shop":"Quick Shop","sign_in":"SIGN IN","sign_succeed_pop":"You have checked in successfully and earned 10 Points today！","sign_succeed_title":"Continuous Check-in For 1 Days","sign_fail":"Failed check in please try again later ！","my_points":"My point","hot":"HOT","new":"NEW","popular":"POPULAR","sold_out":"SOLD OUT1","already_joinbag":"Items are already in your bag.","check_now":"Check now","email_tip":"Enter email Address","shop_now":"shop now","claimed":"claimed","app_only":"APP-ONLY","rule_close":"Close","cancel":"Cancel","mobile_title":"Enter your Mobile Number, and we\\'ll send your download link","country":"Country","select_country":"Please Select Country","phone_number":"Phone Number","send_link":"Send Link","or":"or","send_success":"SUCCESS! We\\'ve sent an SMS to your phone. Click the link to download the ZAFUL app.","coupon_comming_msg":"Coupons are not available until the events begins","coupon_end_msg":"This coupon activity has ended.","coupon_success_tips":"Coupon Received","size":"1SIZE:","color":"1COLOR:","add_to_bag":"1ADD TO BAG","email_require":"Please enter valid email address！","email_error":"Only letters，numbers and \\\".\\\",\\\"-\\\",\\\"_\\\",\\\"@\\\"are supported.","email_alreay_join":"Your email address has been added to our list already, please try adding another.","eu_agreement":"By pressing subscribe,I agree to receive marketing information about Rosegal products and services and to the processing of my personal data for such purposes as described in the Rosegal Privacy Policy. I can withdraw my consent at any time.","addcart_success":"Add to bag successfully","upcoming":"Upcoming","quick_view":"QUICK VIEW","view_more":"View More","view_less":"View Less","added":"ADDED","rg_addcart_success":"Items are already in your bag.","ended":"ended","rank_sold":"Sold","rank_off":"% Off","only_left":"Only xx% Left","tips_sorry":"Sorry, the coupons for today have been run out.","get_more_score_href":"Go and Get! >>>","get_more_score":"How to get more discounts? Go and Get!>>","oops_tips":"Your D Points are not enough.","oops":"OOPS","exchange_succcess":"Coupon Received","yes":"Yes","use_score":"Are you sure to use {score} points to redeem the coupon?","state_use_now":"Use now","state_user_none":"Run out","state_today_claimed":"Expired","state_claimed":"All claimed","state_ended":"Ended","state_underway":"Redeem Now","state_upcoming":"Upcoming","tips_all_claimed":"Sorry, the coupons have been run out.","sorry":"Oops, good luck next time!","btn_ok":"OK","change_desc":"XX chances left","details":"Rules>","congrats":"Winners List","go_shop":"Closed","lott_fail":"If the lucky draw fails, please try again later.","lott_start":"The promotion will start in","free_item":"a free item","wind_free":"You won <span>a FREE item.</span> Just use the coupon issued to your account to purchase it for free.","lott_point":"XX D-Points","win_point":"You won <span>XX D</span> Points. You can check it in your account.</span>","coupon_text_decrease":"a QQXX off QQYY Coupon","coupon_text_percent":"a XX% off QQYY Coupon","win_pri_decrease":"You won a <span>QQXX off QQYY coupon.</span> You can check it in your account.","win_pri_percent":"You won a <span>XX% off QQYY coupon.</span> You can check it in your account.","no_chances_one":"You\\'ve used up your chance of playing. <br>Share to get extra chances!","no_chances_two":"You\\'ve used up your chances today.<br> Please come back tomorrow.","lott_end":"Sorry, promotion ended.","lott_check_now":"Check Now","free_coupon":"Free Shipping Coupon","lott_share":"Share","lott_free_coupon":"You wona  FREE SHIPPING coupon. You can check it at \"Coupons & Points\" page","coupon_delay":"There will be a one-minute delay due to the mass sending of coupons.","category":"Category","sort":"Sort","refine":"Refine","apply":"Apply","clear":"Clear","price_range":"Price Range","reviews":"Reviews","stock_left":"Only XX Left","discount_rank_label":"XX% OFF","hotsale_rank_label":"XX pcs sold","new_rank_label":"XX pcs sold in XX days","gift_fail_add":"1Order Total does not meet the promo requirements"},"siteDomain":"http://m.wap-zaful-master-php5.fpm.egomsl.com","groupId":"de39252ddf870ff125813f2acd6e88bd","langName":"英文","defaultLang":"en","hasEn":true,"uiTplList":{"private":[],"public":{"U000209":{"name":"商品列表tab","tpl_list":[{"id":"54","name":"商品列表tab模板","tpl_id":"495","pic_url":"","view_type":"1","ui_key":"U000209","ui_name":"商品列表tab","create_user":"zhangwenjuan"}]},"U000089":{"name":"页面间导航","tpl_list":[{"id":"15","name":"1111111111111","tpl_id":"392","pic_url":"","view_type":"1","ui_key":"U000089","ui_name":"页面间导航","create_user":"zhangwenjuan"},{"id":"14","name":"跨页面导航模板","tpl_id":"392","pic_url":"","view_type":"1","ui_key":"U000089","ui_name":"页面间导航","create_user":"zhangwenjuan"}]}}},"customKey":0,"pageId":46151,"pipeline":"ZF","activityInfo":{"id":1141,"group_id":"459","type":2,"site_code":"zf-wap","pipeline":"ZF,ZFES,ZFFR,ZFDE,ZFIE,ZFNZ,ZFGB,ZFCA,ZFBE,ZFCH,ZFPH,ZFIN,ZFSG,ZFMY,ZFAU,ZFAT,ZFMX,ZFZA,ZFBR,ZFTH,ZFTW,ZFAR,ZFIT,ZFIL,ZFRU,ZFHK,ZFTR,ZFMX01,ZFRO,ZFJP,ZFVN","lang":"{\"ZF\":[\"en\",\"es\"],\"ZFES\":[\"es\",\"en\",\"fr\"],\"ZFFR\":[\"fr\",\"en\"],\"ZFDE\":[\"de\",\"en\",\"es\"],\"ZFIE\":[\"en\",\"fr\",\"de\",\"es\",\"pt\",\"it\",\"ru\"],\"ZFNZ\":[\"en\"],\"ZFGB\":[\"en\",\"es\"],\"ZFCA\":[\"en\",\"fr\"],\"ZFBE\":[\"fr\",\"en\",\"de\"],\"ZFCH\":[\"de\",\"en\",\"fr\",\"it\",\"es\"],\"ZFPH\":[\"en\"],\"ZFIN\":[\"en\"],\"ZFSG\":[\"en\",\"th\"],\"ZFMY\":[\"en\"],\"ZFAU\":[\"en\"],\"ZFAT\":[\"de\",\"en\"],\"ZFMX\":[\"es\"],\"ZFZA\":[\"en\"],\"ZFBR\":[\"pt\",\"en\"],\"ZFTH\":[\"th\",\"en\"],\"ZFTW\":[\"zh-tw\",\"en\"],\"ZFAR\":[\"ar\",\"en\"],\"ZFIT\":[\"it\",\"en\",\"de\"],\"ZFIL\":[\"en\",\"he\"],\"ZFRU\":[\"ru\",\"en\"],\"ZFHK\":[\"zh-tw\"],\"ZFTR\":[\"tr\",\"en\"],\"ZFMX01\":[\"es\"],\"ZFRO\":[\"ro\"],\"ZFJP\":[\"ja\",\"en\"],\"ZFVN\":[\"vi\",\"en\"]}","name":"5.7常规","description":"","status":2,"verify_status":1,"is_delete":0,"is_lock":0,"is_frequently":0,"mold":1,"start_time":0,"end_time":0,"create_user":"fengcan","create_time":1588836894,"update_user":"fengcan","update_time":1589160536,"verify_user":"","verify_time":0,"langList":[{"key":"en","name":"英文"},{"key":"es","name":"西班牙文"}],"allLangList":[{"pipeline":"ZF","pipeline_name":"全球站","langList":[{"key":"en","name":"英文","is_default":1},{"key":"es","name":"西班牙文","is_default":0}]},{"pipeline":"ZFES","pipeline_name":"西班牙站","langList":[{"key":"es","name":"西班牙文","is_default":1},{"key":"en","name":"英文","is_default":0},{"key":"fr","name":"法文","is_default":0}]},{"pipeline":"ZFFR","pipeline_name":"法国站","langList":[{"key":"fr","name":"法文","is_default":1},{"key":"en","name":"英文","is_default":0}]},{"pipeline":"ZFDE","pipeline_name":"德国站","langList":[{"key":"de","name":"德文","is_default":1},{"key":"en","name":"英文","is_default":0},{"key":"es","name":"西班牙文","is_default":0}]},{"pipeline":"ZFIE","pipeline_name":"欧洲站","langList":[{"key":"en","name":"英文","is_default":1},{"key":"fr","name":"法文","is_default":0},{"key":"de","name":"德文","is_default":0},{"key":"es","name":"西班牙文","is_default":0},{"key":"pt","name":"葡萄牙文","is_default":0},{"key":"it","name":"意大利文","is_default":0},{"key":"ru","name":"俄文","is_default":0}]},{"pipeline":"ZFNZ","pipeline_name":"新西兰站","langList":[{"key":"en","name":"英文","is_default":1}]},{"pipeline":"ZFGB","pipeline_name":"英国站","langList":[{"key":"en","name":"英文","is_default":1},{"key":"es","name":"西班牙文","is_default":0}]},{"pipeline":"ZFCA","pipeline_name":"加拿大站","langList":[{"key":"en","name":"英文","is_default":1},{"key":"fr","name":"法文","is_default":0}]},{"pipeline":"ZFBE","pipeline_name":"比利时站","langList":[{"key":"fr","name":"法文","is_default":1},{"key":"en","name":"英文","is_default":0},{"key":"de","name":"德文","is_default":0}]},{"pipeline":"ZFCH","pipeline_name":"瑞士站","langList":[{"key":"de","name":"德文","is_default":1},{"key":"en","name":"英文","is_default":0},{"key":"fr","name":"法文","is_default":0},{"key":"it","name":"意大利文","is_default":0},{"key":"es","name":"西班牙文","is_default":0}]},{"pipeline":"ZFPH","pipeline_name":"菲律宾站","langList":[{"key":"en","name":"英文","is_default":1}]},{"pipeline":"ZFIN","pipeline_name":"印度站","langList":[{"key":"en","name":"英文","is_default":1}]},{"pipeline":"ZFSG","pipeline_name":"新加坡站","langList":[{"key":"en","name":"英文","is_default":1},{"key":"th","name":"泰语","is_default":0}]},{"pipeline":"ZFMY","pipeline_name":"马来西亚站","langList":[{"key":"en","name":"英文","is_default":1}]},{"pipeline":"ZFAU","pipeline_name":"澳大利亚站","langList":[{"key":"en","name":"英文","is_default":1}]},{"pipeline":"ZFAT","pipeline_name":"奥地利站","langList":[{"key":"de","name":"德文","is_default":1},{"key":"en","name":"英文","is_default":0}]},{"pipeline":"ZFMX","pipeline_name":"拉美站","langList":[{"key":"es","name":"西班牙文","is_default":1}]},{"pipeline":"ZFZA","pipeline_name":"南非站","langList":[{"key":"en","name":"英文","is_default":1}]},{"pipeline":"ZFBR","pipeline_name":"巴西站","langList":[{"key":"pt","name":"葡萄牙文","is_default":1},{"key":"en","name":"英文","is_default":0}]},{"pipeline":"ZFTH","pipeline_name":"泰国站","langList":[{"key":"th","name":"泰语","is_default":1},{"key":"en","name":"英文","is_default":0}]},{"pipeline":"ZFTW","pipeline_name":"台湾站","langList":[{"key":"zh-tw","name":"繁体中文","is_default":1},{"key":"en","name":"英文","is_default":0}]},{"pipeline":"ZFAR","pipeline_name":"沙特站","langList":[{"key":"ar","name":"阿拉伯文","is_default":1},{"key":"en","name":"英文","is_default":0}]},{"pipeline":"ZFIT","pipeline_name":"意大利站","langList":[{"key":"it","name":"意大利文","is_default":1},{"key":"en","name":"英文","is_default":0},{"key":"de","name":"德文","is_default":0}]},{"pipeline":"ZFIL","pipeline_name":"以色列站","langList":[{"key":"en","name":"英文","is_default":1},{"key":"he","name":"希伯来语","is_default":0}]},{"pipeline":"ZFRU","pipeline_name":"俄罗斯站","langList":[{"key":"ru","name":"俄文","is_default":1},{"key":"en","name":"英文","is_default":0}]},{"pipeline":"ZFHK","pipeline_name":"香港站","langList":[{"key":"zh-tw","name":"繁体中文","is_default":1}]},{"pipeline":"ZFTR","pipeline_name":"土耳其站","langList":[{"key":"tr","name":"土耳其文","is_default":1},{"key":"en","name":"英文","is_default":0}]},{"pipeline":"ZFMX01","pipeline_name":"墨西哥站","langList":[{"key":"es","name":"西班牙文","is_default":1}]},{"pipeline":"ZFRO","pipeline_name":"罗马尼亚站","langList":[{"key":"ro","name":"罗马尼亚语","is_default":1}]},{"pipeline":"ZFJP","pipeline_name":"日本站","langList":[{"key":"ja","name":"日语","is_default":1},{"key":"en","name":"英文","is_default":0}]},{"pipeline":"ZFVN","pipeline_name":"越南站","langList":[{"key":"vi","name":"越南语","is_default":1},{"key":"en","name":"英文","is_default":0}]}]},"preview_url":"http://test.geshop.com.release_fz_2.3.5.php7.egomsl.com/activity/zf/native-design/native-preview?pid=2b54051e9e86496d4cc082313e5df5b3&lang=en","relations":{"current":"wap","list":{"pc":{"siteCode":"zf-pc","name":"PC端","url":"http://test.geshop.com.release_fz_2.3.5.php7.egomsl.com/activity/zf/design/index?group_id=313cc4f7c3f7071bae0ab764e918762a&pipeline=ZF&lang=en"},"wap":{"siteCode":"zf-wap","name":"移动端","url":"http://test.geshop.com.release_fz_2.3.5.php7.egomsl.com/activity/zf/native-design/native?group_id=de39252ddf870ff125813f2acd6e88bd&pipeline=ZF&lang=en"}}},"siteCode":"zf-wap","platform":"wap","interfaceConfig":{"cmsgoods":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/cms/goods/goods_list","method":"post","description":"发现好货","isJsonp":1},"elf_notify":{"url":"http://www.elf.com.geshop.php5.egomsl.com/api/geshop-api/sync-geshop","method":"post","description":"通知ELF专题页面链接变更","isJsonp":1},"cms_notify":{"url":"http://www.cms.com.geshop.php7.egomsl.com/api/geshop-api/sync-geshop","method":"post","description":"通知CMS专题页面链接变更","isJsonp":1},"getdetail":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/getdetail","method":"post","description":"商品详情","example":{"content":"{\"lang\":\"en\",\"goodsSn\":\"267585805,266617002,266617005\"}"},"isJsonp":1},"goods_async_detail":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/async-detail","method":"get","description":"异步商品详情接口","example":{"content":"{\"lang\":\"en\",\"goodsSn\":\"267585805,266617002,266617005\"}"},"isJsonp":1},"fullgiftlistverify":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/fullgiftverify","method":"get","description":"搭配购-SKU列表","example":{"content":"{\"lang\":\"en\",\"goodsSn\":\"267585805,266617002,266617005\"}"},"isJsonp":1},"isseckill":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/isseckill","method":"post","description":"是否秒杀商品","example":{"content":"{\"lang\":\"en\",\"goodsSn\":\"267585805,266617002,266617005\"}"},"isJsonp":1},"getrankdetail":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/getrankdetail","method":"get","description":"排行榜商品列表","example":{"content":"{\"type\":1,\"lang\":\"en\",\"cateid\":\"2\",\"pageno\":1,\"pagesize\":20}"},"isJsonp":1},"timeseckilldetail":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/timeseckilldetail","method":"get","description":"秒杀商品列表（根据SKU）","example":{"content":"{\"lang\":\"en\",\"goodsSn\":\"168824901,197567301,268015810\"}"},"isJsonp":1},"fullgiftlist":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/fullgiftlist","method":"get","description":"满赠商品列表【满赠系列接口1】","example":{"content":"{\"lang\":\"en\",\"activityid\":\"147\",\"pageno\":1,\"pagesize\":20}"},"isJsonp":1},"getlistinspu":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/getlistinspu","method":"get","description":"获取同SPU下商品列表【满赠系列接口2】","example":{"content":"{\"lang\":\"en\",\"goodsSn\":\"201484903\"}"},"isJsonp":1},"addgifttocart":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/addgifttocart","method":"get","description":"满赠商品加入购物车【满赠系列接口3】","example":{"content":"{\"lang\":\"en\",\"goodsSn\":\"201484903\",\"manzeng_id\":123}"},"isJsonp":1},"increasebuylist":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/increasebuylist","method":"get","description":"加价购商品列表","example":{"content":"{\"lang\":\"en\",\"activityid\":\"147\",\"pageno\":1,\"pagesize\":20}"},"isJsonp":1},"getcoupon":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/getcoupon","method":"get","description":"优惠券领取","example":{"content":"{\"lang\":\"en\",\"couponid\":\"123\"}"},"isJsonp":1},"coupondetail":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/coupondetail","method":"get","description":"优惠券详情","example":{"content":"{\"lang\":\"en\",\"couponid\":\"123\"}"},"isJsonp":1},"recommendlist":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/recommendlist","method":"get","description":"智能推荐商品列表（无分类ID的）","example":{"content":"{\"lang\":\"en\"}"},"isJsonp":1},"prepromotion":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/prepromotion","method":"get","description":"预促销商品列表","example":{"content":"{\"lang\":\"en\",\"goodsSn\":\"195444002,195444001,195530602,195530601,2021393110,2021393104,2021393102\"}"},"isJsonp":1},"redeemlist":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/redeemlist","method":"get","description":"积分兑换商品列表","example":{"content":"{\"lang\":\"en\",\"goodsSn\":\"201484903,201485603,257064502\"}"},"isJsonp":1},"spikegoods":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/interface/spike-goods/","method":"get","description":"秒杀列表","dataKey":"spike-goods","isJsonp":1},"couponlist":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/couponlist","method":"get","description":"优惠券列表","dataKey":"couponInfo","isJsonp":1},"goods_combogoods":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/combogoods","method":"get","description":"搭配购-SKU列表","isJsonp":1},"goods_comboprice":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/comboprice","method":"get","description":"搭配购-获取组合价","isJsonp":1},"goods_comboaddcart":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/comboaddcart","method":"get","description":"搭配购-加入购物车","isJsonp":1},"elf_webgame_do_lottery":{"url":"http://www.elf.com.0514-game.php5.egomsl.com/api/webgame-api/do-lottery","method":"post","description":"抽奖接口","isJsonp":1},"elf_webgame_get_activity":{"url":"http://www.elf.com.webgame.php5.egomsl.com/api/webgame-api/get-activity","method":"post","description":"获取活动信息","isJsonp":1},"elf_webgame_share_prize":{"url":"http://www.elf.com.webgame.php5.egomsl.com/api/webgame-api/share-prize","method":"post","description":"分享赠送抽奖次数","isJsonp":1},"elf_webgame_info":{"url":"http://www.elf.com.0514-game.php5.egomsl.com/api/webgame-api/info","method":"post","description":"获取抽奖活动数据","isJsonp":1},"activity_sendsms":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/activity/sendsms","method":"post","description":"短信","isJsonp":1},"base_verify":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/fun/?act=verify","method":"get","description":"验证码","isJsonp":1},"cmsgoods_pointsProductDetail":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/activity/pointsProductDetail","method":"get","description":"积分兑换活动详情","isJsonp":1},"activity_exchangePointsProduct":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/activity/exchangePointsProduct","method":"get","description":"积分兑换","isJsonp":1},"getrankvalid":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/getrankvalid","method":"get","description":"排行榜分类ID校验","isJsonp":1},"goods_couponlist_new":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/couponlist_new","method":"get","description":"新优惠码接口","isJsonp":1},"goods_receiveCoupon":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/receiveCoupon","method":"get","description":"领取coupon接口","isJsonp":1},"goods_getCouponInfo":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/goods/getCouponInfo","method":"get","description":"获取coupon接口","isJsonp":1},"user_info":{"url":"http://m.wap-zaful-master-php5.fpm.egomsl.com/geshop/user/info","method":"get","description":"用户信息接口","isJsonp":1},"geshopApi_design_asyncInfo":{"url":"http://test.geshop-api.com.release_sop.php7.egomsl.com/geshop/design/asyncInfo","method":"post","description":"装修页面和预览页面获取数据异步数据接口","isJsonp":1},"geshopApi_design_goodsInfo":{"url":"http://test.geshop-api.com.release_sop.php7.egomsl.com/geshop/design/goodsInfo","method":"post","description":"装修页面配置SKU","isJsonp":1},"geshopApi_page_asyncInfo":{"url":"http://test.geshop-api.com.release_sop.php7.egomsl.com/activity/page/asyncInfo","method":"post","description":"发布页面获取数据异步数据接口","isJsonp":1},"geshopApi_page_fallback":{"url":"http://test.geshop-api.com.release_sop.php7.egomsl.com/geshop/design/fallback","method":"post","description":"发布页面获取兜底数据","isJsonp":1},"gesApi_design_esSearchSortByList":{"url":"http://test.geshop-api.com.release_sop.php7.egomsl.com/geshop/design/esSearchSortByList","method":"get","description":"获取站点ES搜索支持排序列表","isJsonp":1},"gesApi_pc_goods_getSopGoodsDetail":{"url":"http://test.geshop-api.com.release_sop.php7.egomsl.com/web/pc/goods/getSopGoodsDetail","method":"get","description":"PC端获取商品运营平台商品列表","isJsonp":1},"gesApi_m_goods_getSopGoodsDetail":{"url":"http://test.geshop-api.com.release_sop.php7.egomsl.com/web/m/goods/getSopGoodsDetail","method":"get","description":"M端获取商品运营平台商品列表","isJsonp":1},"gesApi_pc_goods_getAutoRefreshUiGoodsList":{"url":"http://test.geshop-api.com.release_sop.php7.egomsl.com/web/pc/goods/getAutoRefreshUiGoodsList","method":"get","description":"PC端获取商品实时价格","isJsonp":1},"gesApi_m_goods_getAutoRefreshUiGoodsList":{"url":"http://test.geshop-api.com.release_sop.php7.egomsl.com/web/m/goods/getAutoRefreshUiGoodsList","method":"get","description":"M端获取商品实时价格","isJsonp":1}},"jsAsyncData":"var GESHOP_ASYNC_DATA_INFO = [];"},"localData":null};
        resolve(res);
    });
}

/**
 * 装修页保存接口
 */
export const design_save_page_info = function () {

}


export default {};