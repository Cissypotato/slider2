
var btns=$('#btns>button')
var n=0
var totalBtn=btns.length
for(let i=0;i<btns.length;i++){
    $(btns[i]).on('click',function(x){        
       var index=$(x.currentTarget).index()
       var p=index*-340
       $('.images').css({
           transform:'translateX('+p+'px)'
       })
      n=index
      activeBtn(btns.eq(n))
    })
}

var timerId=setTimer()

$('.window').on('mouseenter',function(){
    clearInterval(timerId)
})
$('.window').on('mouseleave',function(){
    timerId=setTimer()
})

function activeBtn($btn){
    $btn.addClass('pink').siblings('.pink').removeClass('pink')
}
function setTimer(){
    return setInterval(()=>{
            n++
            $(btns.eq(n%totalBtn)).trigger('click')
        },2000)
}