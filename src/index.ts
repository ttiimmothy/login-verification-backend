import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/api/verify', (req, res) => {
  const { code } = req.body;

  if (code.length !== 6 || !/^\d+$/.test(code)) {
    return res.status(400).json({ message: 'Invalid code format' });
  }

  if (code[5] === '7') {
    return res.status(400).json({ message: 'Verification failed' });
  }

  res.status(200).json({ message: 'Verification successful' });
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});