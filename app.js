const accordionEl = document.getElementsByClassName("accordion__item");



function accordion()
{
    for(let item of accordionEl)
    {
        let accordionHead = item.firstElementChild;
        accordionHead.addEventListener("click", function()
        {
            let accDet = this.nextElementSibling;

            //another way to do
            // if(accDet.style.maxHeight)
            // {
            //     accDet.style.maxHeight = null;
            //     this.lastElementChild.innerHTML="+";
            // }
            // else
            // {
            //     accDet.style.maxHeight = accDet.scrollHeight+"px";
            //     this.lastElementChild.innerHTML="-";
            // }
            //another way to do


            accDet.classList.toggle("show");
            let icon = accordionHead.lastElementChild;
            if(icon.innerHTML==="+")
            {
                icon.innerHTML="-";
            }
            else
            {
                icon.innerHTML="+";
            }
        });
    }
}


accordion();