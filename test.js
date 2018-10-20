var obj = function(){
  console.log("function");
  return 1;
};

obj.fun = function(){
  console.log("Fun");
  return 2;
};

var count = 0;

for(var prop in obj){
  console.log(prop);
  count++;
}
console.log(count);
// console.log(obj());
// console.log(obj.fun());
