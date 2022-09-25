// function for calculating BMI
const calcBMI = () => {
    let height = parseInt( document.getElementById('height').value)
    let weight = parseInt(document.getElementById('weight').value)
    let result = document.getElementById('result')

    if(height === '' || isNaN(height)){
        result.innerHTML = 'Provide a Valid Height'
    }
    else if(weight === '' || isNaN(height)){
        result.innerHTML = 'Provide a Valid weight'
    } else {
        let bmi = (weight / (Math.pow(height, 2)/ 10000)).toFixed(2)
        if(bmi < 18.6){
            result.innerHTML = 'Under Weight ' + bmi
        } else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal Weight ' + bmi
        } else {
            result.innerHTML = 'Over Weight ' + bmi
        }
    }
    
}