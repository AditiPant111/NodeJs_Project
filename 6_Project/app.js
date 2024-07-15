const express = require('express');

const app = express();

app.use(express.json());


const categories = [
    {id:1, name: 'Web'},
    {id:2, name: 'Mobile'},
    {id:3, name: 'Photography'}
]

app.get('/api/categories', (req, res) =>{
    res.send(categories);
});

app.get('/api/categories/:id', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).send('The category with the given id was not found');

    res.send(category);
});

app.post('/api/categories', (req, res)=>{
    const category = {
        id: categories.length+1,
        name: req.body.name,
    };
    categories.push(category);
    res.send(category);
});

app.put('/api/categories/:id', (req, res)=>{
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send('The category with the given Id is not there');

    category.name = req.body.name;
    res.send(category);
});

app.delete('/api/categories/:id', (req, res)=>{
    const category = categories.find(c=> c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send('The genre with the givwn id was not found');
    
    const index = categories.indexOf(category); // Get the correct index of the category
    categories.splice(index, 1); // will remove from an array
    
    res.send(category);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Port is listening on ${port}`));