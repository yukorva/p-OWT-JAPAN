change=document.getElementById('change')

function change_all(){
    if (document.getElementsByTagName('div')[3].innerHTML==='Коробейникова')
       { 
        document.getElementsByTagName('div')[3].innerHTML='Korobeinikova'
        document.getElementsByTagName('div')[4].innerHTML='Yulia'
        document.getElementsByTagName('div')[5].innerHTML='Vladimirovna'
        document.body.style.backgroundImage = 'url(pasport.png)'
        document.body.style.backgroundSize = '520px 688px';  // Размер
        document.body.style.backgroundPosition = 'left top 250px';   // Расположение
        document.body.style.backgroundRepeat = 'no-repeat';
}
    
else{
        
        document.getElementsByTagName('div')[3].innerHTML='Kоробейникова'
        document.getElementsByTagName('div')[4].innerHTML='Юлия'
        document.getElementsByTagName('div')[5].innerHTML='Владимировна'
        document.body.style.backgroundImage = 'url(pasport.png)'
        document.body.style.backgroundSize = '520px 688px';  // Размер
        document.body.style.backgroundPosition = 'left top 250px';   // Расположение
        document.body.style.backgroundRepeat = 'no-repeat';
        }
}//else
//fun
change.addEventListener('click',change_all)