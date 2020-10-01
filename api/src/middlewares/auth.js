const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    const { user } = res.locals.data;
    //auth ok
    if (user) {
        const id = user.id; //esse id viria do banco de dados
        var token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 864000, // expires in one day
        });
        return res.status(200).json({ auth: true, token, user });
    }

    return res.status(400).send('Login inválido!');
};

const ensureAuth = (req, res, next) => {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(403).send({ auth: false, message: 'Failed to authenticate token.' });

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
};

module.exports = { auth, ensureAuth };
