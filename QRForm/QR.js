let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrTextInputs = document.querySelectorAll(".qrText");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  generateQR();
});

function generateQR(){
    console.log("generateQR function called");
    let qrText = "";
    qrTextInputs.forEach(input => {
        if(input.value.length > 0){
            qrText += input.value + "\n";
        } else {
            input.classList.add('error');
            setTimeout(()=>{
                input.classList.remove('error');
            }, 1000)
            console.log("Error: input field is empty");
            return;
        }
    });
    if(qrText.length > 0){
        console.log("QR text:", qrText);
        let qrImageUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText);
        console.log("QR image URL:", qrImageUrl);
        qrImage.src = qrImageUrl;
        imgBox.classList.add("show-img");
    } else {
        console.log("Error: no QR text");
    }
}