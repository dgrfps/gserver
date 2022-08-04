const rateLimit = require('express-rate-limit')


const registerLIMIT = rateLimit({
    //          M   S  * MS
 	windowMs: 30 * 60 * 1000, // 30 min
	max: 1,
	standardHeaders: true, 
	legacyHeaders: false, 
    message: { message: "rate-limited" }
})

module.exports = function(app)
{
    app.use('/register/', registerLIMIT, (req, res, next) => { next(); })

    app.get('/user/:login', require('./player/user'))
    app.get('/login/:login&:pass', require('./player/login'))
    app.get('/register/:login&:pass', require('./player/register'))
    
    app.get('*', (req, res) => res.json({ message: "not found", code: 404 }))
}   