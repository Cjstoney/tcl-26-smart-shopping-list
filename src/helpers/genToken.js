import * as faker from 'faker';

export default function generateToken() {
  const word1 = faker.name.lastName();
  const word2 = faker.hacker.adjective();
  const word3 = faker.random.alphaNumeric(100);
  return `${word1}*${word3}*${word2}`;
}
