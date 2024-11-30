const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const width = window.innerWidth;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            
            if (width > 768) {
                animate({
                    duration: 1000,
                    timing: function(timeFraction) {
                        return Math.pow(timeFraction, 2);
                    },
                    draw: function(progress) {
                        modal.style.display = 'block';
                        modal.style.opacity = progress;
                    }
                });
            } else {modal.style.display = 'block'}
        });
    });
    
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });

    function animate({timing, draw, duration}) {
        let start = performance.now();
       
        requestAnimationFrame(function animate(time) {
            // timeFraction изменяется от 0 до 1
            let timeFraction = (time - start) / duration;
                if (timeFraction > 1) timeFraction = 1;
            // вычисление текущего состояния анимации
            let progress = timing(timeFraction);
      
                draw(progress); // отрисовать её
      
                if (timeFraction < 1) {
                    requestAnimationFrame(animate);
            };
        });
    };
}

export default modal;