import './Post.css';
import React from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Post({ post }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/posts/${post.id}`);
  }

  const dateFormat = new Date(post.created);

  return (
    <div className="Post" onClick={handleClick}>
      <div className="Post-date">Дата публикации: {dateFormat.toLocaleDateString()}</div>
      <div className="Post-content">{post.content}</div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    created: PropTypes.number,
    content: PropTypes.string,
  }).isRequired,
}