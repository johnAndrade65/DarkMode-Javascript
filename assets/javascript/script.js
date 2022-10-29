/*==VARIABLE==*/
const header = document.querySelector('#header');
const icon = document.querySelector('#icon');

/*==SIMPLE 'CLICK' FUNCTION THAT ADDS THE 'DARK' CLASS IN THE HEADER==*/
icon.addEventListener('click',function(){
    header.classList.toggle('dark');
    
    /*==CONDITIONAL THAT CHANGES THE ICON ACCORDING TO THE DARK/LIGHT MODE==*/
    if(header.classList.contains('dark')){
        icon.classList.remove('fa-moon')
        icon.classList.add('fa-sun')
    }else{
        icon.classList.remove('fa-sun')
        icon.classList.add('fa-moon')
    }
});

//icon.classList.remove('fa-moon')
//icon.classList.add('fa-sun')