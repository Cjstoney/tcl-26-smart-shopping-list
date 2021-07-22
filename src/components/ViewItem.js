import React from 'react';
import { db } from '../lib/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const ViewItem = () => {
  const [listItems, loading, error] = useCollection(db.collection('products'));

  return (
    <div>
      {!!loading && <>Loading...</>}
      {!!error && <> Error... </>}
      {!loading && !!listItems && (
        <ul>
          {listItems.docs.map((doc) => {
            const { name, createdAt } = doc.data();
            const date = new Date(createdAt);
            return (
              <li key={doc.id}>
                {`${name} created at ${date.toLocaleString('en-US', {
                  timeZone: 'PCT',
                })}`}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ViewItem;
