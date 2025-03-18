function alphabetizeString(str) {
    return str.split('').sort().join('');
}

function sortString() {
    let input = document.getElementById("textInput").value;
    let sorted = alphabetizeString(input);
    document.getElementById("result").innerText = "Sorted String: " + sorted;
}
