const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here
// Solution : Simple inline reduce function
const totalBatteries = batteryBatches.reduce((total,arrayEl)=>{return total + arrayEl});
