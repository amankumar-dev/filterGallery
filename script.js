const btn=document.querySelectorAll('a');
const img=document.querySelectorAll('.img-holder');

btn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        const filter=e.target.dataset.filter;
        img.forEach((res)=>{
            if(filter=='all'){
                res.style.display='block';
            }
            else{
                if(res.classList.contains(filter)){
                    res.style.display='block';
                }
                else{
                    res.style.display='none';
                }
            }
        })
    })
})