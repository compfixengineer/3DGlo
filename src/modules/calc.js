const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square'); 
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    calcSquare.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/\D/,"");
    });
    calcCount.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/\D/,"");
    });
    calcDay.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/\D/,"");
    });
    
    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;
        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;           
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }
            total.textContent =  totalValue;
        
    } 

    calcBlock.addEventListener('input', (e) => {
        countCalc();
    })
    
} 

export default calc;