(function($) {
    $.fn.stoppedTyping = function(callback, time) {
        time = time || 500;
        var timers = 0;
        this.on('keyup', function(event) {
            timers++;
            setTimeout(timeOver, time);
        });
        function timeOver() {
            timers--;
            if (timers == 0) {
                if (typeof callback != "undefined"){
                    callback();                
                }
            }
        }
    }
})(jQuery);
