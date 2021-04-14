import express from 'express';

const app = express();
const port = 3050;

app.get('/', (req, res) => res.send('It is worked!'));

app.listen(port, () => console.log(`server is listening on ${port}`));
