document.getElementById('login-btn').addEventListener('click',function(){
    
    const numberInput=document.getElementById('input-username').value;
    //2-get the pasword 
    const paswordInput=document.getElementById('input-pasword').value;
    console.log(paswordInput)
    //3-match pin & username
    if(numberInput=="admin" && paswordInput=="admin123"){
        //3-1-turue::>>homepage
        alert('Login Sucsess');

        window.location.assign('./index.html');
    }
    else{
        //3-2-flase::>>alart & return
        alert('Login Faild');
        return;
    }


})