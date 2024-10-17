const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


// sample data

const userDB = {
    "sujit_gaikwad": {
        "username": "sujit_gaikwad",
        "name": "Sujit Gaikwad",
        "email": "user1@gmail.com",
        "age": "21",
        "location": "pune",
        "active_status": true

    },

    "tilu_gaikwad": {
        "username": "tilu_gaikwad",
        "name": "Tilu gaikwad",
        "email": "tilug@gmail.com",
        "age": "22",
        "location": "mumbai",
        "active_status": true
    }
};

app.get('/api/users/:username', (req, res) => {
    const { username } = req.params;
    const { fields, expand } = req.query;

    
    const user = userDB[username];
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    let responseUser = { ...user };

   
    if (fields) {
        const fieldsArray = fields.split(',');
        responseUser = fieldsArray.reduce((acc, field) => {
            if (user[field] !== undefined) acc[field] = user[field];
            return acc;
        }, { username: user.username });
    }

    if (expand) {
        const expandArray = expand.split(',');
        const additionalFields = expandArray.reduce((acc, field) => {
            if (user[field] !== undefined) acc[field] = user[field];
            return acc;
        }, {});
        responseUser.additionalFields = additionalFields;
    }

    res.json(responseUser);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});