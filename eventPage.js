


let contextMenuItem={
    "id":"iphonik",
    "title":"IphonikCall",
    "contexts":["selection"]
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(data){
    if(data.menuItemId=="iphonik"&&data.selectionText){
        chrome.storage.sync.get(['ser','ext'],function(data2){
            if(data2.ser && data2.ext){
                let no=data.selectionText;
                no=no.replace(/\s/g,'');
                no=no.replace('-','');
                // no=no.replace('+','00');

                let r = confirm(no +"is this your number");
                if (r == true) {
                
                    //add
                    var json3 = {
                        ext: data2.ext,
                        password: "passw0rd",
                        to: no,
                        uname: "Extension"
                      };

                      $.ajax({
                        url: 'http://'+data2.ser+':8181/callgenarator/',
                        type: 'POST',
                        contentType:'application/json',
                        data: JSON.stringify(json3),
                        dataType: 'json',
                        success: function(response)
                        {	
                            
                            // alert(JSON.stringify(response.status));
                            //alert(sachin);
                            if(response.status==200){
                                let notifoptions={
                                    type:'basic',
                                    iconUrl:'icon48.png',
                                    title:'Iphonik',
                                    message:' Call generat successed to '+no
                                };
                                chrome.notifications.create('donecallnoti',notifoptions,function(){
                                    close();
                                })
                            }else{
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

                            
                                //alert(sachin);
                            
                        },
                        error: function(response) {
                            // alert(JSON.stringify(response.status));
                            //alert(sachin);
                            if(response.status==200){
                                let notifoptions={
                                    type:'basic',
                                    iconUrl:'icon48.png',
                                    title:'Iphonik',
                                    message:' Call generat successed to '+no
                                };
                                chrome.notifications.create('donecallnoti',notifoptions,function(){
                                    close();
                                })
                            }else{
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

                            
                                //alert(sachin);
                        }
                            
                            
                     });

                    //

                    // let notifoptions={
                    //     type:'basic',
                    //     iconUrl:'icon48.png',
                    //     title:'Iphonik',
                    //     message:no
                    // };
                    // chrome.notifications.create('test',notifoptions);

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
    
                          $.ajax({
                            url: 'http://'+data2.ser+':8181/callgenarator/',
                            type: 'POST',
                            contentType:'application/json',
                            data: JSON.stringify(json3),
                            dataType: 'json',
                            success: function(response)
                            {	
                                
                                // alert(JSON.stringify(response.status));
                                //alert(sachin);
                                if(response.status==200){
                                    let notifoptions={
                                        type:'basic',
                                        iconUrl:'icon48.png',
                                        title:'Iphonik',
                                        message:' Call generat successed to '+no
                                    };
                                    chrome.notifications.create('donecallnoti',notifoptions,function(){
                                        close();
                                    })
                                }else{
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
    
                                
                                    //alert(sachin);
                                
                            },
                            error: function(response) {
                                // alert(JSON.stringify(response.status));
                                //alert(sachin);
                                if(response.status==200){
                                    let notifoptions={
                                        type:'basic',
                                        iconUrl:'icon48.png',
                                        title:'Iphonik',
                                        message:' Call generat successed to '+no
                                    };
                                    chrome.notifications.create('donecallnoti',notifoptions,function(){
                                        close();
                                    })
                                }else{
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
    
                                
                                    //alert(sachin);
                            }
                                
                                
                         });

                        //

                        let notifoptions={
                            type:'basic',
                            iconUrl:'icon48.png',
                            title:'Iphonik',
                            message:no
                        };
                        chrome.notifications.create('test',notifoptions);


                    }
                }
                                

                

                
            }
            else{
                alert("please setup server and user email frist");
            }
        });
        

    }
});