const puppeteer = require("puppeteer");

const startBrowser = async () => {
    let browser;
    try {
        browser = await puppeteer.launch({
            // headless thể hiện xem có hiện thi ui hay không=> false: có hiển thị
            headless: true,
            // Chrome sử dụng multiple layers của sandbox để tránh nhưng thông tin khồng đán tin cậy
            // Nếu thấy content oke thì set như này
            args: ["--disable-setuid-sandbox"],
            // Truy cập website bỏ qua lỗi liên quan đến http secure
            ignoredHTTPSErrors: true,
        });
    } catch (error) {
        console.log("Không tạo được browser " + error);
    }
    return browser;
};

module.exports = startBrowser;
