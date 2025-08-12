<script>
(function() {
  function loadScript(url) {
    var script = document.createElement('script');
    script.setAttribute('data-cfasync', 'false');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);
  }

  document.addEventListener('click', function () {
    var pop = window.open('about:blank', '_blank');
    if (pop) {
      pop.blur(); // đưa cửa sổ ra sau
      window.focus();
      // Tải script trong popunder
      pop.document.write('<!DOCTYPE html><html><head></head><body></body></html>');
      pop.document.close();
      pop.onload = function() {
        var s1 = pop.document.createElement('script');
        s1.src = '//diagramjawlineunhappy.com/t/9/fret/meow4/1792720/e9692f9f.js';
        pop.document.head.appendChild(s1);

        var s2 = pop.document.createElement('script');
        s2.src = '//diagramjawlineunhappy.com/t/9/fret/meow4/1767634/0b79b57a.js';
        pop.document.head.appendChild(s2);
      };
    }
  }, { once: true });
})();
</script>
