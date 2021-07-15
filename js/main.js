var age = prompt("inserisci la tua età");

var km = prompt("inserisci il numero dei km");

var euroPerKm = 0.21;

var ticket = euroPerKm * km;

var fullPrice = ticket;

var under18discount = fullPrice * 20 / 100;

var over65discount = fullPrice * 40 / 100;

if (age < 18) {
    var fullPrice = ticket - under18discount;
    console.log(fullPrice + " €");
    document.getElementById("ticketPrice").innerHTML = fullPrice + " €";
}
else if (age > 65) {
    var fullPrice = ticket - over65discount;
    console.log(fullPrice + " €");
    document.getElementById("ticketPrice").innerHTML = fullPrice + " €";
}
else {
    console.log(fullPrice + " €");
    document.getElementById("ticketPrice").innerHTML = fullPrice + " €";
}

