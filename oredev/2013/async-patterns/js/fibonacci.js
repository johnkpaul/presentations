onmessage = function (message) {
  var data = JSON.parse(message.data);
  var fib = getFib(data.n);

  postMessage(JSON.stringify({id: data.id, type: data.type, fib:fib}));
};











function getFib(n){
  var fib = fibonacci(n);
  if(!isFinite(fib)) {
    fib = 'Infinty'; 
  }
  return fib;
}

function fibonacci(n){

      var i;
      var fibs = [];
      fibs.push(0);
      fibs.push(1);
      
      for(i=0; i<n; i++){
        fibs.push(fibs[0] + fibs[1]);
        fibs.shift();
      }
      return fibs[0];
  //if(n === 0) return 1;
  //if(n === 1) return 1;
  //if(!fibonacci.cache){
    //fibonacci.cache = {};
  //}
  //if(fibonacci.cache[n]){
    //return fibonacci.cache[n];
  //}
  //else{
    //var ret = fibonacci(n - 1) + fibonacci(n-2);
    //fibonacci.cache[n] = ret;
    //return ret;
  //}
}
