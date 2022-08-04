const UUID = require('uuid')
const db = require('../../database/mongo')

module.exports = async function(req, res)
{
    var msg = '';

    await db.user.find({$and: [
        { login: req.params.login },
        { password: req.params.pass }
    ]}).then((result) => { 
        msg = (result.length == 0) ? 'invalid' : 'success'
    });
    
    res.json({ message: msg })
}