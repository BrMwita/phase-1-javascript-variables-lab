/**
 * Mobile Money Fee Calculator
 */
function estimateTransactionFee() {
    const amount = Number(prompt("Unatuma Ngapi? (KES):"));
    let fee = Math.max(10, Math.min(70, amount * 0.015));
    console.log(`Sending KES ${amount}:\nTransaction Fee: KES ${fee}\nTotal: KES ${amount + fee}\nSend Money Securely!`);
}
estimateTransactionFee();
