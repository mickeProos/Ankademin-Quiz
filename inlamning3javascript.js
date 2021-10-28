// P tagg
let results =document.querySelector('#answers')
//refresh knappen
let refresh = document.querySelector('#refresh')
 
function darkMode() {
  //skapar en variabel för bodyn
  let page = document.body;
  // använder toggle metoden på knappen
  page.classList.toggle("dark-mode");
}

//skapar klick function 
refresh.addEventListener('click', function(){
// laddar om sidan
   window.location.reload();
// scrollar till toppen
  window.scrollTo(0, 0);
})

function showResults() {
  // poängen börjar vid 0
  let score = 0
  //för varje rätt svar läggs det till en poäng
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

    // fras skrivs ut tillsammans med poängen i en p tagg längst ner i HTML.
    results.innerHTML = ('Du fick' + ' ' + score + ' ' + 'poäng') 
    
    let totalScore = score / 10
    // om mer än 75 eller lika med, grön
    if (totalScore >= 0.75 ) {
      results.style.color = 'green'
    // om mer än 50 (eller lika mycket) och mindre än 75, orange
    } else if (totalScore < 0.75 && totalScore >= 0.5 ) {
      results.style.color = 'orange'
    //om mindre än 50, röd
    } else {
      results.style.color = 'red'
      
    }



}





  

