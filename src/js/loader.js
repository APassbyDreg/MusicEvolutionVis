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

// for vue component loader
const vue_loader_options = {
      moduleCache: {
        vue: Vue
      },
      async getFile(url) {
        
        // v0.7.x
        const res = await fetch(url);
        if ( !res.ok )
          throw Object.assign(new Error(res.statusText + ' ' + url), { res });
        return await res.text();

        /* v0.8.x 
        const res = await fetch(url);
        if ( !res.ok )
          throw Object.assign(new Error(res.statusText + ' ' + url), { res });
        return {
          getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
        }
        */
      },
      addStyle(textContent) {

        const style = Object.assign(document.createElement('style'), { textContent });
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
      },
    }