import app from './server';

const port = 3001;

const server = app.listen(port, () => {
    console.log('App listening at port %s', port);
});

