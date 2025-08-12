<script>
(function() {
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

      // Tải script vào popunder
      var s1 = pop.document.createElement('script');
      s1.src = '//diagramjawlineunhappy.com/t/9/fret/meow4/1792720/e9692f9f.js';
      pop.document.head.appendChild(s1);

      var s2 = pop.document.createElement('script');
      s2.src = '//diagramjawlineunhappy.com/t/9/fret/meow4/1767634/0b79b57a.js';
      pop.document.head.appendChild(s2);
    }
  }

  // Lắng nghe click ở bất kỳ đâu
  document.addEventListener('click', openPopunder);
})();
</script>
