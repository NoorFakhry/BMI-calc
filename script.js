// BMI = weight / (height^2 / 10000)
const calcBMI = () => {
    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)
    const result = document.getElementById('result')
    if(height === '' || isNaN(height)){
        result.innerHTML = 'provide a valid height'
    }
    else if(weight === '' || isNaN(weight)){
        result.innerHTML = 'provide a valid height'
    }
    else {
        const BMI = (weight / (Math.pow(height, 2) / 10000)).toFixed(2)
        // under weight
        if(BMI < 18.6){
            result.innerHTML = 'Under Weight ' + BMI
            // Normal weight
        } else if(BMI >= 18.6 && BMI < 24.9) {
            result.innerHTML = 'Normal Weight ' + BMI
            // Over weight
        } else {
            result.innerHTML = 'Over Weight ' + BMI
        }
    }
}