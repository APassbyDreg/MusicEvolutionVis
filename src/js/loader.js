// read json from file url and save data to window.__loaded_json
async function readJson (url) {
    window.__json_ready = false;
    await $.ajax({
        dataType: "json",
        url: url,
        data: {},
        success: (data) => {
            window.__loaded_json = data;
            window.__json_ready = true;
        }
    });
}


// read csv from file url and save data to window.__loaded_csv
async function readCSV (url) {
    window.__csv_ready = false;
    await $.ajax({
        dataType: "text",
        url: url,
        data: {},
        success: (data) => {
            window.__loaded_csv = $.csv.toArrays(data);
            window.__csv_ready = true;
        }
    });
}