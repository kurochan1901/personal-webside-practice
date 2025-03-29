document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");

    // 當滑鼠進入左側區域時顯示選單
    document.addEventListener("mousemove", function(event) {
        if (event.clientX < 50) { // 如果滑鼠靠近左側 50px 內
            sidebar.classList.add("active");
        }
    });

    // 當滑鼠離開選單後隱藏
    sidebar.addEventListener("mouseleave", function() {
        sidebar.classList.remove("active");
    });
});
