import React from 'react';
import { db } from '../lib/firebase';

const CreateItem = () => {
  async function handleClick(e) {
    try {
      await db.collection('products').add({
        name: 'NewItem',
        createdAt: Date.now(),
      });
    } catch (err) {
      console.log(err);
    }
  }
  return <button onClick={handleClick}>Add an Item</button>;
};

export default CreateItem;
