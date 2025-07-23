jQuery(document).ready(function($) {
    $.get("https://www.cloudflare.com/cdn-cgi/trace", function(data) {
        try {
            // Không cần xử lý IP hoặc quốc gia nữa
            // -> bỏ toàn bộ phần xử lý 'ip=' và 'loc='

            // Tạo mã quảng cáo
            var adContainer = document.createElement('div');
            adContainer.className = 'adsbanner1';

            var script = document.createElement('script');
            script.async = true;
            script.setAttribute("data-cfasync", "false");
            script.setAttribute("data-clbaid", "");
            script.src = "//clammyendearedkeg.com/bn.js";

            var div = document.createElement('div');
            div.setAttribute("data-cl-spot", "2058133");

            adContainer.appendChild(script);
            adContainer.appendChild(div);

            var headerElements = document.getElementsByClassName('adsbanner1');
            if (headerElements.length > 0) {
                headerElements[0].appendChild(adContainer);
            }
        } catch (e) {
            console.error('Lỗi khi xử lý Cloudflare Trace:', e);
        }
    });
});
