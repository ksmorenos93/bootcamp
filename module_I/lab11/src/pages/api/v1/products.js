import data from 'lab11/mocks/data.json';

export default function handler(req, res) {
  res.status(200).send(data);
}