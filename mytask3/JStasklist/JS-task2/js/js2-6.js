var player = JSON.parse(localStorage.getItem('object'));
console.log(player);
//获取URL数据
var url = location.search,
    str = url.substr(1);
var killMan = document.getElementById('killMan');
var trueIdentity = document.getElementsByClassName('selection');
var deadSpeak = document.getElementById('deadSpeak');
var playerSpeak = document.getElementById('playerSpeak');
var vote = document.getElementById('vote');
step = 0;
      var day = Number(sessionStorage.getItem('day'));
      var y = [];
      for(var qw = 1 ; qw <= day ; qw++){
          y.push(qw);
      }
      for(var t =0; t < y.length; t ++){
          var x = '<div class="day"></div>';
          $('#before').append(x);
      var r =document.getElementsByClassName('day');
          r[t].innerHTML='第' + y[t] + '天';
      }

      if(str === 'vote' || str === 'noKill'){
          killMan.style.backgroundColor = '#8ab09a';
      }
      $('#killMan').click(function () {
              if(step === 0 && str !== 'vote' && str !== 'noKill'){
                  window.location.href = 'js2-7.html?kill';
                  step = 1;
              }else if(step === 1 ){
                  alert("请进行下一步");
              }
              else {
                  alert("请进行后续操作");
              }
      });
      for(var i = 0 ; i < player.length ; i ++) {
          if (str === 'vote' && player[i].deathDay === day) {
              trueIdentity[1].style.display = 'block';
              trueIdentity[1].innerHTML = (player[i].num + 1)+'号被杀手杀死，真实身份是' + player[i].name;
          }else if(str === 'noKill'){
              trueIdentity[1].style.display = 'block';
              trueIdentity[1].innerHTML = '杀手信佛吃斋';
          }
      }
      $('#deadSpeak').click(function () {
          if(step === 0 && str === 'vote'){
              deadSpeak.style.backgroundColor = '#8ab09a';
              alert('请亡灵发言');
              step = 2;
          }else if(step === 0 && str === 'noKill'){
              deadSpeak.style.backgroundColor = '#8ab09a';
              alert('请亡灵发言');
              step = 2;
          }else if(step === 0){
              alert('整天就知道杀人你妈妈知道么')
          }else if(step > 1){
              alert("安息吧")
          }
      });
      $('#playerSpeak').click(function () {
          if (step === 2) {
              playerSpeak.style.backgroundColor = '#8ab09a';
              alert('群众发言');
               step = 3;
          }else if(step === 2 && str === 'noKill'){
              playerSpeak.style.backgroundColor = '#8ab09a';
              alert('请群众发言');
              step = 3;
          } else {
              alert('请按顺序进行')
          }
      });
      $('#vote').click(function () {
          if(step ===3){
              window.location.href = 'js2-7.html?vote';
              sessionStorage.setItem('day' ,day);
          }else{
              alert('请按顺序进行')
          }
      });
$('.back').click(function () {
    window.location.href = 'js2.html'
});






