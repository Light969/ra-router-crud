import React from 'react';
import Form from "./Form/Form";

export default function AddPost({ history }) {
  const handleSubmit = (text) => {
    const fetchBody = { id: 0, content: text };
    fetch(process.env.REACT_APP_DATA_URL,
      {
        method: 'POST',
        body: JSON.stringify(fetchBody),
      })
      .then(() => {
        history.push('/');
      });
  }

  const handleClose = () => {
    history.push('/');
  }

  return (
    <div className="AddPost">
      <Form
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
    </div>
  );
}