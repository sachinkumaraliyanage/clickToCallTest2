
function initClickToDial() {
    ININ.registerNamespace('ININ.ClickToDial.Plugin');
}

(function inin_autoRun() {
    var basePluginUrl = chrome.extension.getURL('');
    var bootstrapper = new ininPluginBootstrapper(basePluginUrl, basePluginUrl, null, true);
    bootstrapper.ininLoadScripts(initClickToDial);
} ());

//add an event listener to handle the click message from the page
chrome.runtime.onMessage.addListener(function(messageString, sender, sendResponse) {
    //we only want to send the number to the interaction client page
    var message = JSON.parse(messageString);
    if(message.type === "ClickToCall"){
        
        let no =message.number;
        chrome.storage.sync.get(['ser','ext'],function(data2){
            if(data2.ser && data2.ext){
                
                

                let r = confirm(no +"is this your number");
                if (r == true) {
                
                    //add
                    var json3 = {
                        ext: data2.ext,
                        password: "passw0rd",
                        to: no,
                        uname: "Extension"
                      };

                   //add ajex
                   $.ajax({
                    url: 'http://'+data2.ser+':8181/callgenarator/',
                    type: 'POST',
                    contentType:'application/json',
                    data: JSON.stringify(json3),
                    dataType: 'json',
                    success: function(response)
                    {	
                        
                        let notifoptions={
                            type:'basic',
                            iconUrl:'icon48.png',
                            title:'Iphonik',
                            message:' Call generat successed to '+no
                        };
                        chrome.notifications.create('donecallnoti',notifoptions,function(){
                            close();
                        })
                        
                    },
                    error: function(response) {
                        // alert(JSON.stringify(response.status));
                        console.log("400");
                        // console.log(response);
                        let notifoptions={
                            type:'basic',
                            iconUrl:'icon48.png',
                            title:'Iphonik',
                            message:' Call generat unsuccessed to '+no
                        };
                        chrome.notifications.create('errorcallnoti',notifoptions,function(){
                            close();
                        })
                        
                    }
                        
                        
                 });
                   /////////////

                } else {
                    var pno = prompt("Please enter correct phone number:", no);
                    if (pno == null || pno == "") {
                        
                    } else {
                        no=pno;
                        no=no.replace(/\s/g,'');
                        no=no.replace('-','');
                        // no=no.replace('+','00');

                        //add
                        var json3 = {
                            ext: data2.ext,
                            password: "passw0rd",
                            to: no,
                            uname: "Extension"
                          };
    
                        
                          //add ajex

                          $.ajax({
                            url: 'http://'+data2.ser+':8181/callgenarator/',
                            type: 'POST',
                            contentType:'application/json',
                            data: JSON.stringify(json3),
                            dataType: 'json',
                            success: function(response)
                            {	
                                
                                let notifoptions={
                                    type:'basic',
                                    iconUrl:'icon48.png',
                                    title:'Iphonik',
                                    message:' Call generat successed to '+no
                                };
                                chrome.notifications.create('donecallnoti',notifoptions,function(){
                                    close();
                                })
                                
                            },
                            error: function(response) {
                                // alert(JSON.stringify(response.status));
                                console.log("400");
                                // console.log(response);
                                let notifoptions={
                                    type:'basic',
                                    iconUrl:'icon48.png',
                                    title:'Iphonik',
                                    message:' Call generat unsuccessed to '+no
                                };
                                chrome.notifications.create('errorcallnoti',notifoptions,function(){
                                    close();
                                })
                                
                            }
                                
                                
                         });

                          ///////////////////////


                    }
                }
                                

                

                
            }
            else{
                alert("please setup server and user email frist");
            }
        });
    }
});
