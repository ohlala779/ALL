(function () {
  var analyticsCode = 'G-MY5YTPS5S2';

  var scriptElement = document.createElement('script');
  scriptElement.src = "https://www.googletagmanager.com/gtag/js?id=" + analyticsCode;
  scriptElement.setAttribute("async", "async");
  document.body.appendChild(scriptElement);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', analyticsCode);
})();
