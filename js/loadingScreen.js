document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const scene = document.querySelector('a-scene');

    // Función para ocultar la pantalla de carga
    function hideLoadingScreen() {
        if (loadingScreen) {
            console.log('Hiding loading screen');
           
            loadingScreen.style.opacity = '0';

            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 5000); 
        }
    }

    //Ocultar la pantalla de carga después de 10 segundos
    const fallbackTimeout = setTimeout(() => {
        console.warn('Fallback: Hiding loading screen after timeout');
        hideLoadingScreen();
    }, 10000);

    if (scene) {
        
        scene.addEventListener('loaded', function () {
            console.log('A-Frame scene loaded');
            hideLoadingScreen();
            clearTimeout(fallbackTimeout);
        }, { once: true });

            
        scene.addEventListener('targetFound', function () {
            console.log('MindAR target found');
            hideLoadingScreen();
            clearTimeout(fallbackTimeout);
        }, { once: true });
    } else {
        console.error('A-Frame scene not found');
        hideLoadingScreen();
        clearTimeout(fallbackTimeout);
    }
});