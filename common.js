
const them = document.querySelectorAll('.footer > p');
them[0].addEventListener('click',()=>{themaFun('black')});
them[1].addEventListener('click',()=>{themaFun('light')});

function themaFun(type){
    let c = type=='black'? 'black': '';
    document.body.className= c;
}

