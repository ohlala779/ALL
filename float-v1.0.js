jQuery(document).ready(function($) {
    $.get("https://www.cloudflare.com/cdn-cgi/trace", function(data) {
        try {
            var lines = data.trim().split('\n');
            var ipLine = lines.find(line => line.startsWith('ip='));
            var countryLine = lines.find(line => line.startsWith('loc='));

            if (!ipLine || !countryLine) return;

            var ip = ipLine.split('=')[1];
            var country = countryLine.split('=')[1];

            // Tạo mã quảng cáo (KHÔNG kiểm tra quốc gia nữa)
            var adContainer = document.createElement('div');
            adContainer.className = 'xx-ads';

            var script = document.createElement('script');
            script.async = true;
            script.setAttribute("data-cfasync", "false");
            script.setAttribute("data-clbaid", "");
            script.src = "//chaseherbalpasty.com/lv/esnk/2058133/code.js";

            var div = document.createElement('div');
            div.setAttribute("data-cl-spot", "2058133");

            adContainer.appendChild(script);
            adContainer.appendChild(div);

            var headerElements = document.getElementsByClassName('header-float');
            if (headerElements.length > 0) {
                headerElements[0].appendChild(adContainer);
            }

        } catch (e) {
            console.error('Lỗi khi xử lý Cloudflare Trace:', e);
        }
    });
});

// Đóng quảng cáo và lưu thời gian vào localStorage
function closeAds(element) {
    var adContainer = element.closest('.xx-ads');
    if (adContainer) {
        adContainer.style.setProperty('display', 'none', 'important');
        var currentTime = Date.now();
        var tenMinutesLater = currentTime + 10 * 60 * 1000;
        localStorage.setItem('adCacheTime', tenMinutesLater.toString());
    }
}

// Kiểm tra localStorage để ẩn/hiện quảng cáo
window.addEventListener('DOMContentLoaded', function() {
    var adContainer = document.querySelector('.xx-ads');
    var adCacheTime = localStorage.getItem('adCacheTime');
    var currentTime = Date.now();

    if (adContainer) {
        if (adCacheTime && currentTime < parseInt(adCacheTime)) {
            adContainer.style.setProperty('display', 'none', 'important');
        } else {
            adContainer.style.setProperty('display', 'block', 'important');
        }
    }
});
