document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('countdown-timer');
    const timerData = JSON.parse(timerElement.getAttribute('data-timer'));
  
    const updateTimer = () => {
      const now = new Date().getTime();
      const end = new Date(timerData.endDate).getTime();
      const distance = end - now;
  
      if (distance < 0) {
        timerElement.innerHTML = 'Offer expired!';
        return;
      }
  
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      timerElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    };
  
    updateTimer();
    setInterval(updateTimer, 1000);
  });
  