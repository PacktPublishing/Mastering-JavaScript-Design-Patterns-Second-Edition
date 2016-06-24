declare var $: any;
export interface Promise<Value> extends P.Promise<Value> { }
//using callback


navigator.geolocation.getCurrentPosition(function(location){
  $.post("/post/url", function(result){
      $.get("/get/url", function(){
          
      });
  });  
});
             
             
async function getPosition(){
    return await navigator.geolocation.getCurrentPosition();
}

async function postUrl(geoLocationResult){
    return await $.post("/post/url");
}
             
async function getUrl(postResult){
    return await $.get("/get/url");
}

async function performAction(){
    var position = await getPosition();
    var postResult = await postUrl(position);
    var getResult = await getUrl(postResult);
}