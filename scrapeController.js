// Điều hướng
const scrapers = require("./scraper");
const fs = require("fs");
const scrapeController = async (browserInstance) => {
    const url = "https://phongtro123.com/";
    const indexes = [1, 2, 3, 4];
    try {
        let browser = await browserInstance;
        const categories = await scrapers.scrapeCategory(browser, url);
        const selectedCategories = categories.filter((category, index) =>
            indexes.includes(index)
        );

        let result1 = await scrapers.scraper(
            browser,
            selectedCategories[0].link
        );
        fs.writeFile("data1.json", JSON.stringify(result1), (err) => {
            if (err) {
                console.log("Ghi data fail" + err);
            }
            console.log("Done");
        });

        let result2 = await scrapers.scraper(
            browser,
            selectedCategories[1].link
        );
        fs.writeFile("data2.json", JSON.stringify(result2), (err) => {
            if (err) {
                console.log("Ghi data fail" + err);
            }
            console.log("Done");
        });
        let result3 = await scrapers.scraper(
            browser,
            selectedCategories[2].link
        );
        fs.writeFile("data3.json", JSON.stringify(result3), (err) => {
            if (err) {
                console.log("Ghi data fail" + err);
            }
            console.log("Done");
        });
        let result4 = await scrapers.scraper(
            browser,
            selectedCategories[3].link
        );
        fs.writeFile("data4.json", JSON.stringify(result4), (err) => {
            if (err) {
                console.log("Ghi data fail" + err);
            }
            console.log("Done");
        });

        await browser.close();
    } catch (error) {
        console.log("Lỗi ở scrape controller: " + error);
    }
};

module.exports = scrapeController;
