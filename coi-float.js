jQuery(document).ready(function($) {
    $.get("https://www.cloudflare.com/cdn-cgi/trace", function(data) {
        try {
            var lines = data.trim().split('\n');
            var ipLine = lines.find(line => line.startsWith('ip='));
            var countryLine = lines.find(line => line.startsWith('loc='));
            if (!ipLine || !countryLine) return;
            var ip = ipLine.split('=')[1];
            var country = countryLine.split('=')[1];

            // Tạo container cho quảng cáo (hình ảnh)
            var adContainer = document.createElement('div');
            adContainer.className = 'xx-ads';

            // Tạo liên kết chứa hình ảnh
            var link = document.createElement('a');
            link.href = 'https://coixx.me';
            link.target = '_blank'; // mở tab mới

            var img = document.createElement('img');
            img.src = '/images/coixxQC.webp';
            img.alt = 'Quảng cáo';
            img.style.maxWidth = '100%'; // responsive

            link.appendChild(img);
            adContainer.appendChild(link);

            // Thêm container vào header
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
