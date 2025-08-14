(function(){
  function loadScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = () => console.log("Loaded:", url);
    script.onerror = () => console.error("Failed:", url);
    document.head.appendChild(script);
  }
  loadScript('//diagramjawlineunhappy.com/t/9/fret/meow4/1792720/e9692f9f.js'); 
  loadScript('//diagramjawlineunhappy.com/t/9/fret/meow4/1767634/0b79b57a.js'); 
})();
