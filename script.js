(function(){
    // localStorage.clear()
    var list = document.querySelector('#list'),
        enter = document.querySelector('#enter'),
        item = document.querySelector('#item');
        enter.addEventListener('click',function(e){
            if(item.value){
                e.preventDefault();
                list.innerHTML += '<li>' + item.value + '</li>';
                store();
                // alert(item.value)

                item.value = "";
            }else{
                alert("Cannot add empty task!")
            }
        })
    
    list.addEventListener('click',function(e){
        var t = e.target;
        if(t.classList.contains('checked')){
            t.parentNode.removeChild(t);
        } else {
            t.classList.add('checked');
        }
        store();
    })
    
    function store() {
        window.localStorage.myitems = list.innerHTML;
    }
    
    function getValues() {
        var storedValues = window.localStorage.myitems;
        if(!storedValues) {
            // alert("initial")
            list.innerHTML = 
                        '<li>Attend club meeting</li>'+
                        '<li>Go to Market</li>'+
                        '<li>Download movies</li>'+
                        '<li>Attend webinar</li>';
        }
        else {
            list.innerHTML = storedValues;
        }
    }
    getValues();
    
    let greyC="#f1ebe5",redC="#ffb0b0",blueC="#a8d5ff",greenC="#bdff9f";
    let body = document.getElementById("body"),title = document.getElementById("heading")
    document.getElementById("default").addEventListener('click',function(){
        body.style.backgroundColor = greyC;
        title.style.color = greyC;
    })
    document.getElementById("red").addEventListener('click',function(){
        body.style.backgroundColor = redC;
        title.style.color = redC;
    })
    document.getElementById("blue").addEventListener('click',function(){
        body.style.backgroundColor = blueC;
        title.style.color = blueC;
    })
    document.getElementById("green").addEventListener('click',function(){
        body.style.backgroundColor = greenC;
        title.style.color = greenC;
    })
})();