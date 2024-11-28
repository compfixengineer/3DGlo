const calc = () => {
    const calcSquare = document.querySelector('.calc-square'); 
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');

    calcSquare.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/\D/,"");
    });
    calcCount.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/\D/,"");
    });
    calcDay.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/\D/,"");
    });
    
} 

export default calc;