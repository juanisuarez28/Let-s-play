progress();
function progress(){
    let porcentaje = document.querySelector('.porcentaje');
    let count = 1;
    let loading = setInterval(animate, 50);
    function animate(){
      if(count == 100){
        clearInterval(loading);
        closeLoader();
      }else{
        count = count + 1;
        porcentaje.textContent = count + '%';
      }
    }
  }
  function closeLoader(){
    document.getElementById("loader").classList.toggle("loader2");
}
