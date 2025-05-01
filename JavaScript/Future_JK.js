function codeCheck() {
let userCheck;
    userCheck = document.getElementById("futureCode");
let finalCheck = userCheck.value.toLowerCase();

    if (finalCheck==="trusted data exchange") {
        localStorageStorage.setItem("key_future",1);
        let img = document.createElement("img");

        // Set the source, width, 
        // height, and alt attributes
        img.src = "images/key.png";
        img.width = 250;
        img.height = 200;
        img.alt = "key";

        // Add positioning style
        img.style.position = "absolute"; // or "relative", "fixed", etc.
        img.style.left = "610px";        // X-coordinate
        img.style.top = "200px";          // Y-coordinate

    
        // Append the image element
        // to the body of the document
        document.body.appendChild(img);
    }

    else{
        localStorage.setItem("key_future",0);

    }



}

