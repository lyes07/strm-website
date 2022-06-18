var q
function source(chapter){
    var xhr = new XMLHttpRequest();
    xhr.open("POST","../backend/q.php",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send('chapter='+chapter);
    xhr.onload = function(){
        if(this.status == 200){
            q = JSON.parse(this.responseText);
            console.log(q)
        }
        else{
            console.log("status not right")
        }
    }        
}

function returnQuestions(){
    return q
}