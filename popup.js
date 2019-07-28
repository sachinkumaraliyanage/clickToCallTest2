$(function(){
    chrome.storage.sync.get(['ser','ext'],function(data){
        $('#server').text(data.ser);
        $('#ext').text(data.ext);
    });
});