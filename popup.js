<script>
(function() {
  const key = 'popupClosedUntil';
  const now = Date.now();
  const delay = 5 * 60 * 1000; // 10 phút

  function loadScript(url) {
    var script = document.createElement('script');
    script.setAttribute('data-cfasync', 'false');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);
  }

  // Kiểm tra có được phép load popup không
  const closedUntil = localStorage.getItem(key);
  if (!closedUntil || now > parseInt(closedUntil)) {
    // Load các script popup
    loadScript('//diagramjawlineunhappy.com/t/9/fret/meow4/1792720/e9692f9f.js'); 
    loadScript('//diagramjawlineunhappy.com/t/9/fret/meow4/1767634/0b79b57a.js'); 

    // Khi popup đóng thì set thời gian khoá (ví dụ sự kiện này do script ngoài bắn ra)
    window.closePopupOnce = function() {
      localStorage.setItem(key, now + delay);
    };
  }
})();
</script>
