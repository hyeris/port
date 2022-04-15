<<<<<<< HEAD

const them = document.querySelectorAll('.footer > p');
them[0].addEventListener('click',()=>{themaFun('black')});
them[1].addEventListener('click',()=>{themaFun('light')});

function themaFun(type){
    let c = type=='black'? 'black': '';
    document.body.className= c;
}

=======

const them = document.querySelectorAll('.footer > p');
them[0].addEventListener('click',()=>{themaFun('black')});
them[1].addEventListener('click',()=>{themaFun('light')});

function themaFun(type){
    let c = type=='black'? 'black': '';
    document.body.className= c;
}
>>>>>>> 0648becd21b9cafa542b5b08e0b6a4f191787c0f
