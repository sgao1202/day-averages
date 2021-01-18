const constructorMethod = (app) => {
    app.get('/', (req, res) => {
        return res.render('landing/landing', {
            title: 'Home'
        });
    });

    app.use('*', (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod;