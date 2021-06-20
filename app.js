function menuchange(){
    var menubar1=document.querySelector('#bar1')
    var menubar2=document.querySelector('#bar2')
    var menubar3=document.querySelector('#bar3')
    var ul=document.querySelector('ul')
    menubar1.classList.toggle('bar1change')
    menubar2.classList.toggle('bar2change')
    menubar3.classList.toggle('bar3change')
    ul.classList.toggle('ulchange')
    }

    window.addEventListener('scroll',animation) 
    function animation(){
      heading = document.querySelectorAll('.innovation') // added class innovation in the indes.html and style css
      console.log('scrolling')
      for (var i=0;i<heading.length;i++){
        if (elementInViewport(heading[i])){
          heading[i].classList.add('inview')
        }
      }
    }
     function elementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
    
        while(el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }
    
        return (
          top >= window.pageYOffset &&
          left >= window.pageXOffset &&
          (top + height) <= (window.pageYOffset + window.innerHeight) &&
          (left + width) <= (window.pageXOffset + window.innerWidth)
        ); 
      }