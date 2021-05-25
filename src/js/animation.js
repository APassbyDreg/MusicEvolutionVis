var animation_timer;
var animation_state;

function start_animation(animation, speed) {
    animation_timer = setInterval(animation, speed)
}

function time_animation() {
    if (!animation_state) {
        app.time_range = [1921, 1930];
        app.range_change();
        animation_state = true;
    }
    else {
        if (app.time_range[1] != 2020) {
            app.time_range[0] += 1;
            app.time_range[1] += 1;
            app.range_change();
        }
        else {
            app.time_range = [1921, 2020];
            app.range_change();
            animation_state = false;
            clearInterval(animation_timer);
        }
    }
}