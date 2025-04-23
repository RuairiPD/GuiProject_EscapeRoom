function codeCheck() {
let userCheck;
    userCheck = document.getElementById("futureCode");
let finalCheck = userCheck.value.toLowerCase();

    if (finalCheck==="trusted data exchange") {
        sessionStorage.futureKey = "Y";

    }

    else{
        sessionStorage.futureKey = "N";

    }



}