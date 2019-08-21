function login(){
    let userid = $("#usr").val();
    let pwd = $("#pwd").val();
    $.ajax({
        url:"http://localhost:8202/sales/login",
        type:"post",
        data: JSON.stringify({
            userName:userid,
            pwd:pwd
        }),
        headers: {
            "Content-Type":"application/json"
        },
        dataType: "json",
        success: function(response){
            console.log(response);
            if(response.result == 'success')
                window.location.href="Dashboard.html";
            else
               $("#errorId").text("Invalid username or password");
        }
    })
}



function signup(){
    let userid = $("#usr").val();
    let pwd = $("#pwd").val();
    let email = $("#email").val();
    $.ajax({
        url:"http://localhost:8202/sales/signup",
        type:"post",
        data: JSON.stringify({
            userName:userid,
            pwd:pwd,
            email:email
        }),
        headers: {
            "Content-Type":"application/json"
        },
       
        success: function(response){
            console.log(response);
            if(response == "User saved successfully")
                 window.location.href="Dashboard.html";
            else if(response == "User already exists")
            $("#errorId").text("Entered mail already registered!");
        }
    })
}