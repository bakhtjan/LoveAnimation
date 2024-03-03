document.addEventListener('DOMContentLoaded', function () {
    const text = document.getElementById('text');
  
    setTimeout(() => {
      text.style.opacity = '1';
      animateText();
    }, 1000);
  
    function animateText() {
      text.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        text.style.transform = 'translateY(0)';
        setTimeout(() => {
          text.style.transform = 'translateY(-20px)';
          setTimeout(() => {
            text.style.transform = 'translateY(0)';
            setTimeout(() => {
              text.style.transform = 'translateY(-20px)';
              setTimeout(() => {
                text.style.transform = 'translateY(0)';
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }
  });
  