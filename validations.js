let register=()=>{

    let fname=document.forms["regForm"]["fname"].value;
    //console.log(fname);  //pravallika
    let arr1=[];

    if(/^$/.test(fname)){
        arr1.push("first name can't left blank");
    }else if(!/^[A-Za-z0-9]{4,8}$/.test(fname)){
       arr1.push(`please follow rules and regulations`); 
    }

    document.getElementById("fname_errors").innerHTML=arr1.join("");
    

    let lname=document.forms["regForm"]["lname"].value;
    //console.log(fname);  //pravallika
    let arr2=[];

    if(/^$/.test(lname)){
        arr2.push("last name can't left blank");
    }else if(!/^[A-Za-z0-9]{4,8}$/.test(lname)){
       arr2.push(`please follow rules and regulations`); 
    }

    document.getElementById("lname_errors").innerHTML=arr2.join("");


    let email=document.forms["regForm"]["email"].value;
    //console.log(fname);  //pravallika
    let arr3=[];

    if(/^$/.test(email)){
        arr3.push("email can't left blank");
    }else if(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)){
       arr3.push(`please follow rules and regulations`); 
    }

    document.getElementById("email_errors").innerHTML=arr3.join("");


    let mobilenumber=document.forms["regForm"]["mobile number"].value;
    //console.log(fname);  //pravallika
    let arr4=[];

    if(/^$/.test(mobilenumber)){
        arr4.push("mobile number can't left blank");
    }else if( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(mobilenumber)){
       arr4.push(`please follow rules and regulations`); 
    }

    document.getElementById("mobile number_errors").innerHTML=arr4.join("");

    return false;       //i want to validations at client side
}