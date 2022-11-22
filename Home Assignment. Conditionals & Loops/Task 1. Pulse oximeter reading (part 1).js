var oxygenLevel = 99.8;
function readingSpO2(oxygenLevel){
    if (oxygenLevel >= 96){
        console.log(`Oxygen Level[${oxygenLevel}%]: Normal`);
    } else if ((oxygenLevel > 94) && (oxygenLevel < 96)){
        console.log(`Oxygen Level[${oxygenLevel}%]: Continue Home Monitoring`);
    } else if ((oxygenLevel >= 93) && (oxygenLevel <= 94)){
        console.log(`Oxygen Level[${oxygenLevel}%]: Seek Advice From Health Professionals`);
    } else if (oxygenLevel <= 92){
        console.log(`Oxygen Level[${oxygenLevel}%]: Seek Urgent Medical Advice!`);
    } else {
        console.log('!VALUE:ERROR!');
    }
}
readingSpO2(oxygenLevel);