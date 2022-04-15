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

>>>>>>> df2f8d1297914a9d2161aecec792d733b3d6e1cb
