
function timee() {
    setInterval(()=>{
    const now = new Date();
    let time = now.getHours();
    let ttime = now.getMinutes();
    let tttime = now.getSeconds();
     if (time < 10) time = "0" + time;
        if (ttime < 10) ttime = "0" + ttime;
        if (tttime < 10) tttime = "0" + tttime;
    const timew=`${time}:${ttime}:${tttime}`;
    let text=document.getElementById("gg");
  text. textContent=timew;
   
    },1000);

}