document.getElementById('btnLoadCustomers').addEventListener('click', LoadCustomers);

function LoadCustomers()
{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'Customers.json', true);

    xhr.onload = function(){
            if(this.status === 200){

                console.log(this.responseText);
                let customers = JSON.parse(this.responseText);
                    
                customers.forEach(function(customer){
                alert(`Customer name is ${customer.name}`);
            });
           
            //alert(`Customer ID is ${cust.name}`)
        }
    };
    xhr.send();
}