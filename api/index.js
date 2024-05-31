const express = require('express');
const Joi = require('joi');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

app.post('/register', (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error);
    }
    res.send('User registration successful');
});

app.listen(PORT, () => {
    console.log(`Server running on the port: ${PORT}`);
});
