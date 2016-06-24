//using callback
navigator.geolocation.getCurrentPosition(function (location) {
    $.post("/post/url", function (result) {
        $.get("/get/url", function () {
        });
    });
});
//async function getPosition(){
//    return await navigator.geolocation.getCurrentPosition()
//}              
