jQuery(document).ready(function($) {
    // Tạo container
    var adContainer = document.createElement('div');
    adContainer.className = 'xx-ads';

    // Tạo liên kết dẫn tới coixx.me
    var link = document.createElement('a');
    link.href = "https://coixx.me"; 
    link.target = "_blank";

    // Tạo hình ảnh từ file bạn cung cấp
    var img = document.createElement('img');
    img.src = "/images/coixxQC.webp";
    img.alt = "Xem Phim Sex Không Quảng Cáo";
    img.style.maxWidth = "100%";

    link.appendChild(img);
    adContainer.appendChild(link);

    // Thêm nút đóng
    var closeBtn = document.createElement('button');
    closeBtn.innerText = "Đóng";
    closeBtn.style.marginTop = "5px";
    closeBtn.onclick = function() {
        closeAds(this);
    };
    adContainer.appendChild(closeBtn);

    // Chèn vào trang
    var headerElements = document.getElementsByClassName('header-float');
    if (headerElements.length > 0) {
        headerElements[0].appendChild(adContainer);
    }
});

// Hàm đóng container
function closeAds(element) {
    var adContainer = element.closest('.xx-ads');
    if (adContainer) {
        adContainer.style.setProperty('display', 'none', 'important');
        var currentTime = Date.now();
        var tenMinutesLater = currentTime + 10 * 60 * 1000;
        localStorage.setItem('adCacheTime', tenMinutesLater.toString());
    }
}

// Kiểm tra localStorage
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
