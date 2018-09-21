document.getElementById('btnLoadCustomer').addEventListener('click', LoadCustomer);

function LoadCustomer(){
    //alert('Hi');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'Customer.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
            let cust = JSON.parse(this.responseText);

            alert(`Customer ID is ${cust.name}`)
        }
    };
    xhr.send();
}
