let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let inactive = document.getElementsByClassName('toggle');
let active = document.getElementsByClassName('toggle');

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.fontWeight = "bold";
            active[i].classList.remove('active');
            inactive[i].classList.add('inactive');
        } else {
            contentDiv[i].style.height = "0px";
            toggles[i].style.fontWeight = "300";
            inactive[i].classList.remove('inactive');
            active[i].classList.add('active');
        }
      for (let j = 0; j < contentDiv.length; j++){
            if(j !== i){
                contentDiv[j].style.height = "0px";
            toggles[j].style.fontWeight = "300";
            inactive[j].classList.remove('inactive');
            active[j].classList.add('active');
            }
      }

    });
}