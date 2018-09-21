//alert('hi from external script');

let btn = document.getElementById('btnSubmit');
btn.addEventListener('click', AddItemsToList);

function AddItemsToList(e)
{
    let ulItem = document.querySelector('#ulItems');
    let newElement = document.createElement('li');
    newElement.innerHTML = document.getElementById('txtData').value;
    ulItem.appendChild(newElement);


}