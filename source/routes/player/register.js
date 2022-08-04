const UUID = require('uuid')
const db = require('../../database/mongo')

module.exports = async function(req, res) { 
    var msg = '';
    
    await db.user.find({$and: [
        { login: req.params.login }
    ]}).then((result) => { 
        if(result.length > 0)
        {
            msg = "already exist"
            return;
        }
    });
    
    if(msg == '')
    {
        await db.user.create({ uuid: UUID.v4(), login: req.params.login, password: req.params.pass }).then((u) => { 
            msg = 'success'
        });
    }

    res.json({ message: msg })
}