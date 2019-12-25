const fs = require('fs');

// fs.readFile('rk.txt',function(err, data)
// {
// if(err) throw err;
// console.log(data.toString());
// });

// var data = "I am writing...";
// fs.writeFile('rk.txt',data,function(err)
// {
//     if(err) throw err;
//     console.log("I am written...");
  
// });

fs.rename('rk.txt','ok.txt', function(err){
    if(err) throw err;
    console.log("Successfully renamed");
})