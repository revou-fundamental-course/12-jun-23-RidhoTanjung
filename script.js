document.getElementById("konversiButton").addEventListener("click", function() {
    var suhuCelcius = parseFloat(document.getElementById("inputCelcius").value);
    var suhuFahrenheit = (suhuCelcius * 9/5) + 32;
    document.getElementById("hasilKonversi").innerHTML = "Hasil konversi: " + suhuFahrenheit + " °F";
});

document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("inputCelcius").value = "";
    document.getElementById("hasilKonversi").innerHTML = "";
});

document.getElementById("reverseButton").addEventListener("click", function() {
    var suhuFahrenheit = parseFloat(document.getElementById("inputCelcius").value);
    var suhuCelcius = (suhuFahrenheit - 32) * 5/9;
    document.getElementById("hasilKonversi").innerHTML = "Hasil konversi: " + suhuCelcius + " °C";
});
