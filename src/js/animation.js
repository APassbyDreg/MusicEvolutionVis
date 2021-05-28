var animation_timer;

function start_animation(animation, speed) {
    animation_timer = setInterval(animation, speed)
}

function stop_animation() {
    app.animating = false;
    clearInterval(animation_timer);
}

function time_animation() {
    if (!app.animating) {
        app.animating = true;
        app.time_range = [1921, 1930];
        app.range_change();
    }
    else {
        if (app.time_range[1] != 2020) {
            app.time_range[0] += 1;
            app.time_range[1] += 1;
            app.range_change();
        }
        else {
            stop_animation();
        }
    }
}