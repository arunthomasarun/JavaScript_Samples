const noOfJokes = document.querySelector('#txtNoOfJokes')

document.getElementById('btnLoadJokes').addEventListener('click', LoadJokes);

function LoadJokes(e)
{
    /*const xhr = new XMLHttpRequest();
    xhr.open(`http://api.icndb.com/jokes/random/${noOfJokes.value}` , true);

    xhr.onload = function(){
        if(this.status === 200)
        {
            let jokes = JSON.parse(this.responseText);
            console.log(jokes);
        }
    }
    xhr.send()*/

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${noOfJokes.value}`, true);
  
    xhr.onload = function() {
      if(this.status === 200) {
        const response = JSON.parse(this.responseText);
        
        let output = '';
  
        if(response.type === 'success') {
          response.value.forEach(function(joke){
            //output += `<li>${joke.joke}</li>`;
            output += joke.joke;
          });
        } else {
          //output += '<li>Something went wrong</li>';
          output += 'Something went wrong';
        }
  
        //document.querySelector('.jokes').innerHTML = output;
        console.log(output);
        
      }
    }
  
    xhr.send();
  
    //e.preventDefault();
}