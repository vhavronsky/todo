const { Router } = require('express'),
      router = Router(),
      Todo = require('../models/todo');


// getting todo list
router.get('/', async (req, res) => {
    try {   
        const todos = await Todo.findAll();
        res.status(200).json(todos);
    } catch(e) { 
        console.log(e);
        res.status(500).json({
            message: 'Server Error'
        }) 
    }
});

// adding new task
router.post('/', async (req, res) => {
    try {   
        const todo = await Todo.create({
            title: req.body.title,
            done: false
        });
        res.status(201).json({todo});
    } catch(e) { 
        console.log(e);
        res.status(500).json({
            message: 'Server Error'
        }) 
    }
});

// changing task
router.put('/:id', async (req, res) => {
    try {   
        const todo = await Todo.findByPk(+req.params.id);
        todo.done = req.body.done;
        await todo.save();
        
        res.status(200).json({ todo });
    } catch(e) { 
        console.log(e);
        res.status(500).json({
            message: 'Server Error'
        }) 
    }
});

// deleting task
router.delete('/:id', async (req, res) => {
    try {   
        // const todo = await Todo.findByPk(req.params.id);
        // or
        
        const todos = await Todo.findAll({
            where: {
                id: +req.params.id
            }
        });

        const todo = todos[0];
        await todo.destroy();
        
        res.status(204).json({});
    } catch(e) { 
        console.log(e);
        res.status(500).json({
            message: 'Server Error'
        }) 
    }
});



module.exports = router;
