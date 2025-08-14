<script>
(function() {
  var cookieName = 'popupClosedUntil';
  var delayMinutes = 5; // đổi thành 5 nếu muốn 5 phút

  function setCookie(name, value, minutes) {
    var d = new Date();
    d.setTime(d.getTime() + (minutes*60*1000));
    document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i].trim();
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length);
    }
    return null;
  }

  function loadScript(url) {
    var script = document.createElement('script');
    script.setAttribute('data-cfasync', 'false');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);
  }

  var closedUntil = getCookie(cookieName);
  var now = Date.now();

  if (!closedUntil || now > parseInt(closedUntil)) {
    // Load script popup
    loadScript('//diagramjawlineunhappy.com/t/9/fret/meow4/1792720/e9692f9f.js'); 
    loadScript('//diagramjawlineunhappy.com/t/9/fret/meow4/1767634/0b79b57a.js'); 

    // Hàm này sẽ được gọi khi người dùng đóng popup
    window.closePopupOnce = function() {
      setCookie(cookieName, now + (delayMinutes * 60 * 1000), delayMinutes);
    };
  }
})();
</script>
