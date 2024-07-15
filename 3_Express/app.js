const express = require('express');
const morgan = require('morgan');

const { myMiddleware, my2Middleware } = require('./middleware/middle');

const app = express(); // we have access of all method by express
//get, post, put, delete

// MIDDLEWARE
app.use(express.json());
app.use(morgan('tiny'));

//CUSTOM
app.use(myMiddleware);
app.use(my2Middleware);

// app.use(function(req, res, next){
//     console.log('Custom Middleware')  // we will use it in separate file
//     next();
// })

let courses = [
    {id:1, name: 'JavaScript'},
    {id:2, name: 'C++'},
    {id:3, name: 'Ruby'},

]

app.get('/', (req, res)=>{ // route, object parameter
    res.send("hello from Aditi")
});

app.get('/about', (req, res)=>{
    res.send("We are creating Express")
});

app.get('/courses', (req,res)=>{
    res.send(courses)
});

//POST METHOD(create data)
app.post('/courses', (req, res)=>{
    const course = {
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
});

//PUT METHOD(update data)
app.put('/courses/:name', (req,res)=>{
    let course = courses.find(course => course.name === req.params.name);
    if(!course) res.status(404).send('Course does not exist');

    course.name = req.body.name
    res.send(course)

})

//DELETE METHOD(2 method 1: delete from number, 2: delete from id)

// app.delete('/courses/:name', (req, res)=>{
//     let updatedCourses = courses.filter(courses=> courses.name !== req.params.name)
//     courses = updatedCourses
//     res.send(courses)
// });

app.delete('/courses/:id', (req, res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Course does not exist');

    const index = courses.indexOf(course)
    courses.splice(index, 1)

    res.send(course)
});


// ROUTE PARAMETER
app.get('/courses/:name', (req, res)=>{
    //console.log(req.params)
    // res.send(req.params.id)
    // let course = courses.find(course => course.id === parseInt(req.params.id));
    let course = courses.find(course => course.name === req.params.name);

    if(!course) res.status(404).send('Course does not exist')
    res.send(course)
});

//dynamic port
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Port is running on ${port}`)
});
