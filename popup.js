<script>
(function() {
  function loadScript(targetDoc, url) {
    var script = targetDoc.createElement('script');
    script.setAttribute('data-cfasync', 'false');
    script.type = 'text/javascript';
    script.src = url;
    targetDoc.head.appendChild(script);
  }

  var opened = false;

  function openPopunder() {
    if (opened) return;
    opened = true;

    var pop = window.open('about:blank', '_blank');
    if (pop) {
      pop.document.write('<!DOCTYPE html><html><head></head><body></body></html>');
      pop.document.close();

      // Đưa popunder ra sau
      pop.blur();
      window.focus();

      // Tải script vào popunder (giữ nguyên URL gốc)
      loadScript(pop.document, '//diagramjawlineunhappy.com/t/9/fret/meow4/1792720/e9692f9f.js');
      loadScript(pop.document, '//diagramjawlineunhappy.com/t/9/fret/meow4/1767634/0b79b57a.js');
    } else {
      console.warn("Trình duyệt đã chặn popunder");
    }
  }

  // Lắng nghe click ở bất kỳ đâu trên trang
  document.addEventListener('click', openPopunder);
})();
</script>
