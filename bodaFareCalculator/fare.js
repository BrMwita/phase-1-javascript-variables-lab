/**
 * Boda Boda Fare Calculator
 */
function calculateBodaFare() {
    const distance = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
    const total = 50 + (distance * 15);
    console.log(`Uko kwote? Io ni ${distance} km:\nUkikalia Pikipiki: KES 50\nMpaka Uko: KES ${distance * 15}\nTotal: KES ${total}\nPanda Pikipiki!`);
}
calculateBodaFare();
