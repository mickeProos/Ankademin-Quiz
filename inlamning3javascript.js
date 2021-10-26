let refresh = document.querySelector('#refresh')
let results =document.querySelector('#answers')
 

function darkMode() {
  let page = document.body;
  
  page.classList.toggle("dark-mode");
}

refresh.addEventListener('click', function(){
   window.location.reload();
  window.scrollTo(0, 0);
})

function showResults() {
  let score = 0
  if (document.querySelector('#true1').checked){
    score++
  }
  if (document.querySelector('#true2').checked){
    score++
  }
  if (document.querySelector('#true3').checked){
    score++
  }
  if (document.querySelector('#true4').checked){
    score++
  }
  if (document.querySelector('#true5').checked){
    score++
  }
  if (document.querySelector('#true6').checked){
    score++
  }
  if (
    document.querySelector('#true7-1').checked &&
    document.querySelector('#true7-2').checked &&
    document.querySelector('#true7-3').checked &&
    document.querySelector('#true7-4').checked &&
    document.querySelector('#true7-5').checked &&
    document.querySelector('#true7-6').checked &&
    document.querySelector('#true7-7').checked &&
    document.querySelector('#true7-8').checked &&
    document.querySelector('#true7-9').checked) 
    {
      score++
    }
    if (document.querySelector('#true8').checked){
      score++
    }
    if (document.querySelector('#true9').checked){
      score++
    }
    if (document.querySelector('#true10').checked){
      score++
    }
    results.innerHTML = ('Du fick' + ' ' + score + ' ' + 'poäng') 
    
    let totalScore = score / 10
    // om mer än 75, grön
    if (totalScore >= 0.75 ) {
      results.style.color = 'green'
    // om mer än 50 orange och mindre än 75
    } else if (totalScore < 0.75 && totalScore >= 0.5 ) {
      results.style.color = 'orange'
    //om mindre än 50 röd
    } else {
      results.style.color = 'red'
    }



}


// färger för olika procent av svaren


  

