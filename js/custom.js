getHitokoto();
function getHitokoto() {
  window.setTimeout("getHitokoto()", 15000);

  fetch("https://v1.hitokoto.cn?c=a&c=b&c=c&c=d&c=i&c=h&c=k")
    .then((response) => response.json())
    .then((data) => {
      const hitokoto = document.getElementById("hitokoto");
      hitokoto.innerText = data.hitokoto + " —— " + data.from;
    })
    .catch(console.error);
}


console.log = function() {
  console.info(`%c
        _/_/_/                      _/    _/                    
     _/          _/_/      _/_/    _/    _/    _/_/    _/_/_/   
   _/  _/_/  _/_/_/_/  _/_/_/_/  _/_/_/_/  _/    _/  _/    _/   
  _/    _/  _/        _/        _/    _/  _/    _/  _/    _/    
   _/_/_/    _/_/_/    _/_/_/  _/    _/    _/_/    _/    _/     %c\n
   Welcome!👏 Have nice day! 😃                                `,"color: #29ADC5; background: #030307; padding:5px 0;","background: #29ADC5; padding:5px 0;");
  console.info(`%c
  Github %c https://github.com/geehon                             \n`,"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;")
}
