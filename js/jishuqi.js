const JSQ = {
  init:function(){
    this.bind();
  },
  bind:function(){
    let reduce = document.getElementById('reduce');
    let add = document.getElementById('add');
    let goclose = document.getElementById('goclose');
    let remove = document.getElementById('remove');
    let allcheckbox = document.getElementById('allcheckbox');
    goclose.addEventListener('click',this.goclose);
    reduce.addEventListener('click',this.reduce);
    add.addEventListener('click',this.add);
    remove.addEventListener('click',this.remove);
    allcheckbox.addEventListener('click',this.allcheckbox);
  },
  reduce:function(){
    let numInp = document.getElementById('num-inp');
    let value =numInp.value;
    if (value > 0) {
      numInp.value = Number(value) - 1;
    }else{
      return
    }
  },
  add:function(){
   let numInp = document.getElementById('num-inp');
    let value =numInp.value;
    if (value < 10) {
      numInp.value = Number(value) + 1;
    }else{
      return
    }
  },
  goclose:function(){
    let numberClose = document.getElementById('number-close').innerText;
    let numInp = document.getElementById('num-inp');
    index = numInp.value;
    number = Number(numberClose)
    close = number*index;
    let money = document.getElementById('money-red');
    money.innerText = close + '.00'
  },
  remove:function(){
    let remove = document.getElementById('goshopList');
    let money = document.getElementById('money-red');
    money.innerText = 0 + '.00'
    remove.remove();
  },
  allcheckbox:function(){
    let allcheckbox = document.getElementById('allcheckbox');
    let othercheck = document.getElementsByName('dang');
    for(var i=0;i<othercheck.length;i++){ 
      if(allcheckbox.checked){ 
        othercheck[i].checked=true; 
      }else{ 
        othercheck[i].checked=false; 
      }  
  }
 }
}


JSQ.init();