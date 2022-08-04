const UUID = require('uuid')
const db = require('../../database/mongo')

module.exports = async function(req, res)
{
    var info = { message: 'not found' };
    
    try {
        await db.user.findOne({login: req.params.login}).then((result) => { 
            if(result == null) return;
    
            info = { }
            for(d in result.toObject())
                if(d != 'password' && d != '_id' && d != '__v')
                    info[d] = result[d]
        });
    } catch (error) {
        
    }
    
    res.json(info)
}