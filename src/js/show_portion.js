var portion_csv;
var now_start_time;
var now_end_time;

async function init_page_1() {
    // example code
    await readCSV("./assets/data/music_portion.csv");
    // console.log(window.__loaded_csv[0]);
    portion_csv = window.__loaded_csv[0];
    console.log(now_start_time);
}

function portion_time_change() {
    now_start_time = app.$data.time_range[0];
    now_end_time = app.$data.time_range[1];
}

// let app_portion = {
//     data() {
//         return {
//             year_range: [1921, 2020],
//             start_year = 1921,
//             end_year = 2020,
//         }
//     }
// }