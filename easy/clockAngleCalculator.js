const clockAngleCalculator = time => {
    let timeArray = time.split(':')
    let hourAngle = +timeArray[0] * 30
    let minAngle = +timeArray[1] * 6
    if ((minAngle - hourAngle) > 0) {
        return minAngle - hourAngle
    } else {
        return (minAngle - hourAngle) + 360
    }
}

console.log(clockAngleCalculator("1:59"))

// given a string that represents a time to calculate. return back the angle between the hour hand and minute hand of a clock. for example at 30 minutes should return an angle of 180 degrees. a full hour should return an angle of 0 degrees. 

// always going to be from the hour hand to the min hand. 

// steps: 
// 1. calculate the min hand 
// 2. calculate the hour hand
// 3. subtract the two
// 4. check if negative, if so subtract from 360