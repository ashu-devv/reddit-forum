const express = require('express');
const authRoutes = require('./routes/auth-routes');
const postRoutes = require('./routes/post-routes');
const bodyParser = require('body-parser');
const {serverConfig,Logger} = require('./config');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

app.listen(serverConfig.PORT ||6000, () => {
    console.log(`Successfully started the server at port ${serverConfig.PORT}`);
    Logger.info('Successfully Started The Server', 'root', {});
}) 
