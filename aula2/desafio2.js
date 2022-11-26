const etPrice = 4.55;
const petrolPrice = 6.77;
const kmPerLiter_et = 9;
const kmPerLiter_petrol = 10;
const rangeKm = 100;
const fuelType = 'Etanol';

if (fuelType === 'Etanol'){
    const etTotalLiter = rangeKm / kmPerLiter_et;
    const amountSpentEt = etTotalLiter * etPrice;
    console.log('O valor gasto foi ', amountSpentEt.toFixed(2));
} else {
    const petrolTotalLiter = rangeKm / kmPerLiter_petrol;
    const amountSpentPet = petrolTotalLiter * petrolPrice;
    conslose.log('O valor gasto foi ', amountSpentPet.toFixed(2));
}
