function reverseNum() {
    let num = parseInt(document.getElementById("numInput").value);
    let rev = 0;
    
    while (num > 0) {
        rev = rev * 10 + (num % 10); // Extract last digit and build reversed number
        num = Math.floor(num / 10);  // Remove last digit
    }

    document.getElementById("output").innerText = "Reversed Number: " + rev;
}
