const batteries = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteries.reduce((total, battery) => total + battery, 0);

console.log(totalBatteries); // This should log the sum of all batteries
