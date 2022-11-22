var beatsPerMinute = 150;
function pulseRateReading(beatsPerMinute){
    if((beatsPerMinute >= 40) && (beatsPerMinute <= 100)){
        console.log(`Pulse Rate[${beatsPerMinute}bpm]: Normal`);
    } else if((beatsPerMinute >= 101) && (beatsPerMinute <= 109)){
        console.log(`Pulse Rate[${beatsPerMinute}bpm]: Continue Home Monitoring`);
    } else if((beatsPerMinute >= 110) && (beatsPerMinute <= 130)){
        console.log(`Pulse Rate[${beatsPerMinute}bpm]: Seek Advice From Health Professionals`);
    } else if(beatsPerMinute >= 131){
        console.log(`Pulse Rate[${beatsPerMinute}bpm]: Seek Urgent Medical Advice!`);
    } else {
        console.log('!VALUE:ERROR!');
    }
}
pulseRateReading(beatsPerMinute);