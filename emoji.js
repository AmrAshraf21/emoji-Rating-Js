let star = document.querySelectorAll('.fa-star');

let emojis = document.querySelectorAll('.fa-regular');
let colors = ['red', 'orange','lightblue','lightgrey','green']
updateRating(0);
star.forEach(function(star,index){
    star.addEventListener('click', function(){
       updateRating(index);
    })

})
function updateRating(index){
    star.forEach((star,idx)=>{
        if(idx < index + 1){
           star.classList.add('active')
        }else{
            star.classList.remove('active')
        }

    })
    emojis.forEach(emojis=>{
      
 emojis.style.transform = `translate(-${index*50}px)`;
 emojis.style.color = colors[index]

        

    })

}