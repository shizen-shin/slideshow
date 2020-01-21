(function(){
    'use strict';
    
  var current = 0; //page番号取得用
  var mainImage = document.getElementById('mainImage');

  var thumbs = document.querySelectorAll('.thumbnailImage');
  for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener('click', function(){
      mainImage.src = 'images/' + this.dataset.image;// imgタグのsrc属性を書き換える
      current = this.dataset.index;
      dpn();
    });
  }

  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var page = document.getElementById('page');

    var images =['images/pic01.jpg',
                 'images/pic02.jpg',
                 'images/pic03.jpg',
                 'images/pic04.jpg',
                 'images/pic05.jpg',
                 'images/pic06.jpg'];

  function dpn(){
    page.textContent = (Number(current)+1) + '/' + images.length;
  }

  dpn();

  prev.addEventListener('click',function(){
      current --;
      if(current == -1){
          current = images.length-1;
      }
      mainImage.src = images[current];
      dpn();
  })

  next.addEventListener('click',function(){
      current ++;
      console.log(current);
      if(current == 6){
        current = 0;
      }
      mainImage.src = images[current];
      dpn();
  })

})();
