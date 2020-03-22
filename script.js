function loadingDone() {
    $("html, body").animate({
        scrollTop: $("#loading").height()  //Get the document height
    }, 2000);
}

var sticky1 = new StickySidebar('#sticky1', { topSpacing: 20 });
var sticky2 = new StickySidebar('#sticky2', { topSpacing: 20 });