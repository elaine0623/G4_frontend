let coll = document.querySelectorAll('.news-collapse');


//select the button which was click
for (let i = 0 ;i < coll.length;i++) {
//add even listener 
coll[i].addEventListener('click',()=> {
    //detect the button add toggle the active class name
    this.classList.toggle = "active";
    //if there is active in the class name
    if(coll[i].classList.includes('active')) {
        coll[i].classList.remove('active')
    }else {
        coll[i].classList.add('active')
    }
})
}