function scuberGreetingForFeet(distance){
  // Write your code here!
  let reply;
  if (  400 >= distance){
      reply = "This one is on me!"
    }
    else if (distance > 2000 && distance < 2500){
      reply ='I will gladly take your thirty bucks.'}
    else if (2500 < distance){
      reply = 'No can do.'
    }
    return reply
  }
consolescuberGreetingForFeet(200)

function ternaryCheckCity(city){
  // Write your code here!
  let reply;
  if (city == "NYC"){
    reply= "Ok, sounds good."
  } else if (city == "Pittsburgh"){
    reply= "No go."
  }
  return reply
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let reply
  if (tip == "generous"){
    reply= "Thank you so much."
  } else if (tip == 'not as generous' ){
    reply ="Thank you."
  }
  else {
    reply = "Bye."
  }
  return reply
}
