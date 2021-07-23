import React from 'react';
import { db } from '../lib/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const ViewItem = () => {
  const [listItems, loading, error] = useCollection(
    db.collection('products').orderBy('createdAt', 'desc'),
  );

  return (
    <div>
      {!!loading && <>Loading...</>}
      {!!error && <> Error... </>}
      {!loading && !!listItems && (
        <ul>
          {listItems.docs.map((doc) => {
            const { name, createdAt } = doc.data();
            const updatedDate = new Date(createdAt);
            return <li key={doc.id}>{`${name} created at ${updatedDate}`}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default ViewItem;
