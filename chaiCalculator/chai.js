/**
 * Chai Bora Ingredient Calculator
 */
function calculateChaiIngredients() {
    const numberOfCups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${200 * numberOfCups} ml`);
    console.log(`Milk: ${50 * numberOfCups} ml`);
    console.log(`Tea Leaves: ${numberOfCups} tablespoons`);
    console.log(`Sugar: ${2 * numberOfCups} teaspoons\nEnjoy your Chai Bora!`);
}
calculateChaiIngredients();
