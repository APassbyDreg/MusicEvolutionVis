const row_cnt = 100;

let active_data;

async function initDanmaku() {
    await readJson("./assets/data/active_time.json");
    active_data = window.__loaded_json.data;
    active_data.forEach(element => {
        app.musicians.push(element[0]);
    });
    setTimeout(start_danmaku, 1000);
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