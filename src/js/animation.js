var animation_timer;
var animation_state;

function start_animation(animation, speed) {
    animation_timer = setInterval(animation, speed)
}

function time_animation() {
    if (!animation_state) {
        $("#reset-btn").addClass("disabled");
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
            animation_state = false;
            clearInterval(animation_timer);
            $("#reset-btn").removeClass("disabled");
        }
    }
}