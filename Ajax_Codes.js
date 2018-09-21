document.getElementById('btnExecuteAjax').addEventListener('click', CallAjax);

function CallAjax(){
   
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'LogFile.txt', true);
    xhr.onload = function(){
        //alert('Hi');
        if (this.status === 200){
            alert(this.responseText);
        }
    }

    xhr.onerror = function(){
        alert('Error in request procesing');
    };
    xhr.send();
}