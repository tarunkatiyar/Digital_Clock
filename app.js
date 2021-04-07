window.onload = () => {
    
    function showTime() {
        let date = new Date();
        let hour = date.getHours();        //0 to 23
        let minutes = date.getMinutes();   // 0 to 59  
        let seconds = date.getSeconds();   // 0 to 59 seconds

        let session = 'AM';

        if (hour === 0) {
            hour = 12;

        }

        if (hour > 12) {
            hour = hour - 12;
            session = 'PM';
        }

        hour = (hour < 10) ? '0' + hour : hour;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        let time = hour + ':' + minutes + ':' + seconds + ' ' + session;

        document.querySelector('#myTime').innerText = time;

        setTimeout(showTime, 1000);  

    }
    showTime();
}