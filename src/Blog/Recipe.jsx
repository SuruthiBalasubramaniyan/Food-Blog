import React, { useState } from 'react';
import './CommentSection.css'; 

const CommentSection = () => {
  const [comments, setComments] = useState([
    { id: 1, name: 'John Doe', text: 'No one wants to read a laundry list of foods...', rating: 5 },
    { id: 2, name: 'Vital', text: 'Every dish we tried was bursting with flavor...', rating: 4 },
    { id: 3, name: 'Mark', text: 'Every dish we tried was bursting with flavor and cooked to perfection. Highly recommend the [Kung Pao Chicken] and [South Indian Gravey].” “Hands down, some of the best food Ive had recently! They use the freshest ingredients and make sure each dish is done the right way.', rating: 4.5 },
    { id: 4, name: 'Komal', text: 'Every dish we tried was bursting with flavor and cooked to perfection. Highly recommend the [Kung Pao Chicken] and [South Indian Gravey].” “Hands down, some of the best food Ive had recently! They use the freshest ingredients and make sure each dish is done the right way.', rating: 4 },
  ]);

  const [newCommentFields, setNewCommentFields] = useState({
    name: '',
    text: '',
    rating: 1
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCommentBox = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFieldChange = (field, value) => {
    setNewCommentFields(prevFields => ({
      ...prevFields,
      [field]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newCommentFields.name.trim() && newCommentFields.text.trim()) {
      setComments(prevComments => [
        ...prevComments,
        { ...newCommentFields, id: prevComments.length + 1 }
      ]);
      setNewCommentFields({ name: '', text: '', rating: 1 });
      handleCloseModal();
    } else {
      alert('Please provide both name and comment text.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Comments</h2>
      <div>
        {comments.map(comment => (
          <div key={comment.id}>
            <h4>{comment.name}</h4>
            <p>{comment.text}</p>
            <div>
              {[...Array(5)].map((_, index) => (
                <span key={index} className={index < comment.rating ? 'star filled' : 'star'}>
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleAddCommentBox} className='btn-info'>Add Comment</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close btn btn-danger" variant='outline-danger' onClick={handleCloseModal}>✕</button>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newCommentFields.name}
                onChange={(event) =>
                  handleFieldChange('name', event.target.value)
                }
                placeholder="Name"
                required
              />
              <textarea className='mt-2'
                value={newCommentFields.text}
                onChange={(event) =>
                  handleFieldChange('text', event.target.value)
                }
                placeholder="Comment"
                required
              />
              <div>
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={index < newCommentFields.rating ? 'star filled' : 'star'}
                    onClick={() => handleFieldChange('rating', index + 1)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <br />
              <button className='btn btn-submit btn-primary ms-2' type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
