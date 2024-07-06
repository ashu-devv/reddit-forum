const express = require('express');
const authRoutes = require('./src/routes/auth-routes');
const postRoutes = require('./src/routes/post-routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
