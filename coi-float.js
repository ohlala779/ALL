jQuery(document).ready(function($) {
    $.get("https://www.cloudflare.com/cdn-cgi/trace", function(data) {
        try {
            var lines = data.trim().split('\n');
            var ipLine = lines.find(line => line.startsWith('ip='));
            var countryLine = lines.find(line => line.startsWith('loc='));

            if (!ipLine || !countryLine) return;

            var ip = ipLine.split('=')[1];
            var country = countryLine.split('=')[1];

            // Tạo container quảng cáo dạng float
            var adContainer = document.createElement('div');
            adContainer.className = 'xx-ads ads-mobile catfix';
            adContainer.style.position = 'fixed';
            adContainer.style.top = '0';
            adContainer.style.left = '0';
            adContainer.style.width = '100%';
            adContainer.style.background = '#fff';
            adContainer.style.zIndex = '9999';
            adContainer.style.textAlign = 'center';
            adContainer.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            adContainer.style.padding = '5px 0';

            // Thêm liên kết + hình ảnh
            var link = document.createElement('a');
            link.href = "https://coixx.me";
            link.target = "_blank";

            var img = document.createElement('img');
            img.src = "/images/coixxQC.webp";
            img.alt = "Liên kết tới coixx.me";
            img.style.maxWidth = "300px";
            img.style.height = "auto";

            link.appendChild(img);
            adContainer.appendChild(link);

            // Thêm nút đóng
            var closeBtn = document.createElement('a');
            closeBtn.href = "javascript:;";
            closeBtn.innerText = "X";
            closeBtn.style.position = 'absolute';
            closeBtn.style.top = '5px';
            closeBtn.style.right = '10px';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.fontSize = '16px';
            closeBtn.onclick = function() {
                closeAds(this);
            };
            adContainer.appendChild(closeBtn);

            // Chèn vào body (nổi trên đầu trang)
            document.body.appendChild(adContainer);

        } catch (e) {
            console.error('Lỗi khi xử lý Cloudflare Trace:', e);
        }
    });
});

// Hàm đóng quảng cáo và lưu thời gian vào localStorage
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
