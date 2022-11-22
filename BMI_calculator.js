function calculateBMI(weightInKG, heightInMeters) {
    let BMI =  weightInKG / (heightInMeters * 2);
    return console.log(BMI);
}

calculateBMI(85, 1.65);