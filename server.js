const express = require('express');
const hbs = require('hbs');

var port = 3000;//deafult local host
var app = express();  //init express

hbs.registerPartials(__dirname+'/views/partials');//set folder of the partials files (.hbs) while __dirname is the relative folder
app.set('view engine','hbs'); //set the app (express)to work with hbs

//app.use - middleware (execute when path is reached / execute without path

// app.use('/about',(req,res,next)=>{//execute on specific path
// console.log('im here');
// next();//let the program continue
// });

app.use((req,res,next)=>{//execute on any path every time you swith page
console.log('im here');
next();//let the program continue
});

hbs.registerHelper('mizHelper',()=>{ //function to run inside hbs files inside of {{example}}
  // return new Date().getFullYear();
  return 'text to send';
});


app.get('/',(request, response)=>{
// response.send(`<h1>Hello there, this is my homepage  </h1>`);
response.render('homepage.hbs',{
  mizchanger:'this is 2017',
  mizvartwo: 'this is 2018 actually'
});
});

app.get('/about',(request, response)=>{//what happen when server get request, /user requested
response.send(`<h1>Hello there, this is my about page  </h1>`);
});






app.listen(port,()=>{   //run the server on decided port
  console.log(`server is running on port ${port}`);
});
