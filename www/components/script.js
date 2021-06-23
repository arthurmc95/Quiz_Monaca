// This is a JavaScript file
$(document).on("click","#confirm", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Você acertou!!!");
      navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Você errou!!");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Quantas bolas de ouro Cristiano Ronaldo tem?", confirma, "Pergunta 1:",['5','2']);
});

$(document).on("click","#confirm2", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Você acertou!!!");
      navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Você errou!!");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Quantos títulos de Formula 1 Lewis Hamilton tem?", confirma, "Pergunta 2:",['7','9']);
});

$(document).on("click","#confirm3", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Você é Team LH44!!");
      navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Você é Team MV33!!");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Quem você prefere: Hamilton ou Verstappen?", confirma, "Pergunta 3:",['Hamilton','Verstappen']);
});

$(document).on("click","#confirm4", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Você errou!!");
      navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Você acertou!!!");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Qual é time brasileiro com mais titulos mundiais?", confirma, "Pergunta 4:",['Palmeiras','São Paulo']);
});

$(document).on("click","#confirm5", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Você é Team Messi!");
      navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Você é Team CR7!");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Você prefere Cristiano Ronaldo ou Lionel Messi?", confirma, "Pergunta 5:",['Messi','Cristiano Ronaldo']);
});

