$(function(){
    $("#sub").click(function(){
        let ser=$("#ser").val();
        let ext=$("#ext").val();
        if(ser){
            chrome.storage.sync.set({'ser':ser},function(){
                if(ext){
                    chrome.storage.sync.set({'ext':ext},function(){
                        let notifoptions={
                            type:'basic',
                            iconUrl:'icon48.png',
                            title:'Iphonik',
                            message:'Setting setup success!'
                        };
                        chrome.notifications.create('SettingNotif',notifoptions,function(){
                            close();
                        });
                        
                    });

                }else{
                    alert("user email address is not added");
                    close();
                }
            });
        }else{
            alert("server address is not added");
            close();
        }

    });
});