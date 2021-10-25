const express = require('express'),
      PORT = process.env.PORT || 3000;
      path = require('path'),
      sequelize = require('./utils/database'),
      todoRouters = require('./routes/todo');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use('/api/todo', todoRouters);


app.use((req, res, next) => {
    res.sendFile('/index.html');
});


async function start() {
    try {
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server: http://localhost:${PORT}`);
        });
    } catch(e) { console.log(e) }
} 

start();

