module.exports = function (casper, ready) {
    // disable JavaScript
    casper.options.pageSettings.javascriptEnabled = false;

    // reload the page without JS enabled
    casper.thenOpen(casper.page.url);
}