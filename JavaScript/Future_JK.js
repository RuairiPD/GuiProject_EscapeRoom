function codeCheck() {
let userCheck;
    userCheck = document.getElementById("futureCode");
let finalCheck = userCheck.value.toLowerCase();

    if (finalCheck==="trusted data exchange") {
        localStorage.setItem("key_future",1);
        let img = document.createElement("img");

        // Set the source and alt attributes
        img.src = "images/key.png";
        img.alt = "key";
        
        // Add responsive styling
        img.style.position = "absolute";
        img.style.width = "15vw";  // 15% of viewport width
        img.style.maxWidth = "250px"; // Maximum size
        img.style.aspectRatio = "250/200"; // Maintain original aspect ratio (250x200)
        img.style.left = "50%"; // Center horizontally
        img.style.transform = "translateX(-50%)"; // Adjust for centering
        img.style.top = "25vh"; // Position from top (20% of viewport height)
        
        // For better image quality on high-res displays
        img.style.imageRendering = "auto";
        
        // Append the image element to the body of the document
        document.body.appendChild(img);
    }

    else{
        localStorage.setItem("key_future",0);

    }



}

