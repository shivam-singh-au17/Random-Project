function runProgram(input){
    var info_data = (input);
   var amt = info_data - 80;
   var  unit_rate = 0;
   var last = 0
for(var i = 1; i< 200; i++)
{
   if(i <= 50)
   {
       unit_rate = unit_rate + 3;
       if(unit_rate == amt)
       {
           last = i;
           break;
       }
   }
   else if(i > 50 && i <= 150)
   {
       unit_rate = unit_rate +5;
       if(unit_rate == amt)
       {
           last = i;
           break;
       }
   }
   else{
       unit_rate = unit_rate + 10;
       if(unit_rate == amt)
       {
           last = i;
           break;
       }
   }
}
console.log(last);
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});