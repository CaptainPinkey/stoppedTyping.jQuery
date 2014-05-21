(function($) {
    $.fn.stoppedTyping = function(callback, time) {
        time = time || 500;
        var timers = new Array();
        this.on('keyup', function(event) {
            timers.push(1);
            setTimeout(timeOver, 1000);
        });
        function timeOver() {
            timers.shift();
            if (timers.length == 0) {
                if (typeof callback != "undefined"){
                    callback();                
                }
            }
        }
    }
})(jQuery);
