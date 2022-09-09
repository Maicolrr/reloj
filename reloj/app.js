const clock = document.getElementById('clock')

function Digital_clock (){

  setInterval(()=>{

    const realTime = new Date()
    const hour = realTime.getHours()
    const minutes = realTime.getMinutes()
    const seconds = realTime.getSeconds()

    clock.textContent=hour+" - "+minutes+" - "+seconds;
    
    // console.log(hour+"-"+minutes+"-"+seconds);
  },1000)

}
Digital_clock()