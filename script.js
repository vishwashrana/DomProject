let isStatus=document.querySelector('h5')

// let addFriend=document.querySelector('#add')
// let removeFriend=document.querySelector('#remove')

let btn=document.querySelector('#add')
let check=0
btn.addEventListener("click",function(){
    if(check==0){
    isStatus.innerHTML="Friends"
    isStatus.style.color="green"
    btn.innerHTML="Remove"
    check=1
    }
    else{
    isStatus.innerHTML="Stranger"
    isStatus.style.color="red"
    btn.innerHTML="Add Friend"
    check=0

    }
})
