function fibonacci(n){

      var i;
      var fibs = new Array();
      fibs.push(0);
      fibs.push(1);
      
      for(i=0; i<n; i++){
        fibs.push(fibs[0] + fibs[1]);
        fibs.shift();
      }
      return fibs[0];
}

function getId(){
  if(!getId.counter){ getId.counter = 0;}
  return getId.counter++;
}

