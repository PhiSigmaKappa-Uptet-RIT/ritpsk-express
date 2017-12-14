var postObj = {};


$(document).ready(function(){
    $("#eventPay").click(function(){
        
        var cancelFlag = false;
        if($("#teamName").val().length == 0){
            cancelFlag = true;
        }
        if($("#teamMember1").val().length == 0){
            cancelFlag = true;
        }
        if($("#teamMember2").val().length == 0){
            cancelFlag = true;
        }
        if($("#email").val().length == 0){
            cancelFlag = true;
        }
        if($("#phone").val().length == 0){
            cancelFlag = true;
        }
        if(cancelFlag){
            alert("Please check that you filled in all required fields for Event Pay");
        }else{
            postObj['teamName'] = $("#teamName").val();
            postObj['teamMember1'] = $("#teamMember1").val();
            postObj['teamMember2'] = $("#teamMember2").val();
            postObj['email'] = $("#email").val();
            postObj['phone'] = $("#phone").val();
            console.log(postObj);
            $.post("/event-submit", postObj)
                .done(function(data){
                    if(data.trans){
                        window.location.href = '/success-record';
                    }
                    else{
                        window.location.href = '/error-record';
                    }
                });
        }
    });
});
