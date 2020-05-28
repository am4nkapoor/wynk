var container = document.getElementById('hearContainer') , 
    bigHeart = document.getElementById('bigHeart') ,
    heartSrc = bigHeart.getAttribute('src');

container.addEventListener('click',generateHeart);
function generateHeart(){
  TweenMax.fromTo([bigHeart],.15,{scale:1},{scale:.88,repeat:1,yoyo:true,ease:Back.easeIn.config(7)})
  var 
  newH = document.createElement('img') ,
  newC = document.createElement('div') ,
  WH = R(80,15) , newDs = [] ;
  for(var nd,i=2; i--;){ 
    nd = document.createElement('div'); nd.className='dots'; 
    newDs.push(nd); container.insertBefore(nd,bigHeart);
  };
  newH.src = heartSrc; newH.className='hearts'; newC.className='circ';
  TweenLite.set(newH,{width:WH,height:WH})
  container.insertBefore(newH,bigHeart); container.appendChild(newC);
  heartAnim(newH,newC,newDs);
};
function heartAnim(e1,e2,e34){
  var dur = R(3.5,1.5) , Path = [] , Y = R(-250,-380) , xStep = ~~R(6,3) ;
  for(var i=1; i<xStep; i++){ Path.push({x:R(32,-96) , y:i*(Y/xStep)}) };
  TweenLite.to(e1,dur,{scale:.3,
    bezier:{ curviness:1.5,values:Path,autoRotate:90 },
    onComplete:function(){ container.removeChild(e1); container.removeChild(e2); }
  });
  TweenLite.to(e1,dur-0.2,{force3D:true,opacity:1,ease:SlowMo.ease.config(0.1,0.8,true)});
  TweenLite.fromTo(e2,.6,{force3D:true,scale:.3},{scale:1,opacity:0});
  TweenMax.staggerTo(e34,R(3.5,1.5),{force3D:true,opacity:0,scale:0,
    cycle:{
      bezier:function(){
        var nPath = [];
        for(var i=1; i<xStep; i++){ nPath.push({x:R(32,-96) , y:i*(Y/xStep)}) };
        return {curviness:1.5,values:nPath}
      }
    }
  },R(0.5,0),function(){for(var i=2;i--;){container.removeChild(e34[i]);}});  
};
function R(M,m) { return m+(M-m)*Math.random(); };


var clapContainer = document.getElementById('clapContainer') , 
    bigClap = document.getElementById('bigClap') ,
    heartSrc1 = bigClap.getAttribute('src');

clapContainer.addEventListener('click',generateHeart1);
function generateHeart1(){
  TweenMax.fromTo([bigClap],.15,{scale:1},{scale:.88,repeat:1,yoyo:true,ease:Back.easeIn.config(7)})
  var 
  newH = document.createElement('img') ,
  newC = document.createElement('div') ,
  WH = R(80,15) , newDs = [] ;
  for(var nd,i=2; i--;){ 
    nd = document.createElement('div'); nd.className='dots'; 
    newDs.push(nd); clapContainer.insertBefore(nd,bigClap);
  };
  newH.src = heartSrc1; newH.className='hearts'; newC.className='clapcirc';
  TweenLite.set(newH,{width:WH,height:WH})
  clapContainer.insertBefore(newH,bigClap); clapContainer.appendChild(newC);
  heartAnime(newH,newC,newDs);
};
function heartAnime(e1,e2,e34){
  var dur = R(3.5,1.5) , Path = [] , Y = R(-250,-380) , xStep = ~~R(6,3) ;
  for(var i=1; i<xStep; i++){ Path.push({x:R(32,-96) , y:i*(Y/xStep)}) };
  TweenLite.to(e1,dur,{scale:.3,
    bezier:{ curviness:1.5,values:Path,autoRotate:90 },
    onComplete:function(){ clapContainer.removeChild(e1); clapContainer.removeChild(e2); }
  });
  TweenLite.to(e1,dur-0.2,{force3D:true,opacity:1,ease:SlowMo.ease.config(0.1,0.8,true)});
  TweenLite.fromTo(e2,.6,{force3D:true,scale:.3},{scale:1,opacity:0});
  TweenMax.staggerTo(e34,R(3.5,1.5),{force3D:true,opacity:0,scale:0,
    cycle:{
      bezier:function(){
        var nPath = [];
        for(var i=1; i<xStep; i++){ nPath.push({x:R(32,-96) , y:i*(Y/xStep)}) };
        return {curviness:1.5,values:nPath}
      }
    }
  },R(0.5,0),function(){for(var i=2;i--;){clapContainer.removeChild(e34[i]);}});  
};
function R(M,m) { return m+(M-m)*Math.random(); };
