var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
let xhrBTN = document.querySelector('#xhr');
let fetchBTN = document.querySelector('#fetch');
let axiosBTN = document.querySelector('#axios');
let quote = document.querySelector('#quote');


// MAKING API REQUEST WITH XHR
xhrBTN.addEventListener('click', function(){
    let XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);
            quote.innerText = data
        }
    }
    
    XHR.open('GET', url); 
    XHR.send();
})

//MAKING API REQUEST WITH FETCH
fetchBTN.addEventListener('click', function(){
    fetch(url).then(function(res){
        if(!res.ok){
            throw error(res.status);
        } 
        return res;
    }).then(function(res){
        return res.json()
    }).then(function(data){
        quote.innerText = data;
    }).catch(function(err){
        console.log('there was errror ' + err);
    })
})

//MAKING API REQUEST WITH AXIOS
axiosBTN.addEventListener('click', function(){
    axios.get(url).then(function(res){
        quote.innerText = res.data;
    }).catch(function(err){
        if(err.response){
            console.log('there was a problem with response' + err.response.status);
        } else if(err.request){
            console.log('there was a problem with request')
        }else{
            console.log('err', err.message);
        }
    })
})

//MAKING API REQUST WITH jQUERY
$( document ).ready(function() {
    //jquery starts here
    
    $('#jquery').click(function(){
        $.getJSON(url).done(function(data){
        $("#quote").text(data)
    }).fail(function(err){
        console.log('there was ' + err)
    })
});

//jquery ends here
})