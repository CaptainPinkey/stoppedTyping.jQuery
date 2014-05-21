stoppedTyping.jQuery
====================

Get informend when user stopps typing using jQuery.


.stoppedTyping(callback, [time])

'time' is the maximal interval between 'keyup' events before the 'callback' gets fired. Default is set to 500 miliseconds.
Simple example:
---------------

```javascript
$('input[type="text"]').stoppedTyping(function(){
  //Do something
});
```
