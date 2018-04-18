import server from './server';

const PORT = 8080;
server.listen(process.env.PORT || PORT, () => console.log('App listening at port %s', PORT));

