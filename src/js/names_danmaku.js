const row_cnt = 100;
const min_musician_value = 15;  //  截断阈值
const max_musician_value = 100; //  高亮阈值
let active_data;

async function initDanmaku() {
    await readJson("./assets/data/active_time.json");
    active_data = window.__loaded_json.data;
    await readJson("./assets/data/artist_influence_value_data.json");
    artist_value_data = window.__loaded_json;
    active_data.forEach(element => {
        musician = element[0];
        if (artist_value_data[musician] != undefined) {
            musician_value = artist_value_data[musician];
            if (musician_value <= min_musician_value) {
                return;
            }
            app.musicians.push({
                name: musician,
                value: musician_value,
                highlight: (musician_value >= max_musician_value) ? 1 : 0
            });
        }  
    });
    setTimeout(start_danmaku, 1000);
    console.log(app.musicians);
}

function start_danmaku () {
    $("#musicians-danmaku").css("opacity", "1");
    for (let i = 0; i < 50; i++) {
        let selector = `.danmaku-row:eq(${i})`;
        danmaku_loop(selector, 200000);
    }
}

function danmaku_loop (selector, time) {
    let width = $(selector).width();
    $(selector).css("transition", `all linear ${time}ms`);
    $(selector).css("transform", `translate(-${width/2}px)`);
    setTimeout(()=> {
        $(selector).css("transition", "none");
        $(selector).css("transform", "translate(0px)");
        danmaku_loop(selector, time);
    }, time);
}