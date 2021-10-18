const express = require('express');
const dotenv = require('dotenv');
const app = express();

const { routes } = require('./routes');

dotenv.config();
const PORT = process.env.PORT || '';

app.use(express.json());
app.use(express.urlencoded({extended: true}));

routes(app);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
