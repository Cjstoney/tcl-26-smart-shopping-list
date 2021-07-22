import React from 'react';
import { db } from '../lib/firebase';

const CreateItem = () => {
  async function handleClick(e) {
    await db.collection('products').add({
      name: 'NewItem',
      date: Date.now().toLocaleString('en-US'),
    });
  }
  return <button onClick={handleClick}>Add an Item</button>;
};

export default CreateItem;
