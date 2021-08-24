import React from 'react';
import generateToken from '../../helpers/genToken';
import { db } from '../../lib/firebase';
import { Redirect } from 'react-router';

const CreateList = () => {
  async function handleClick(e) {
    // on Click it should create a new token and then add it to the db
    const token = generateToken();
    localStorage.setItem('token', token);
    // then check that the token was added to the DB
    // then redirect to the view page.
    try {
      await db
        .collection('products')
        .add({
          name: 'NewItem',
          createdAt: Date.now(),
          token,
        })
        .then((response) => {
          if (!!response) {
            console.log('added');
            <Redirect
              to={{
                pathname: '/',
              }}
            />;
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  return <button onClick={handleClick}>Add an Item</button>;
};

export default CreateList;
