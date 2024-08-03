import { useState } from 'react';
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function QuizControlButtons({ 
  quizId,
  deleteQuiz,
  navigateToQuizDetails,
  publishQuiz,
  unpublishQuiz,
  isPublished
}: {
  quizId: string;
  deleteQuiz: (quizId: string) => void;
  navigateToQuizDetails: (quizId: string) => void;
  publishQuiz: (quizId: string) => void;
  unpublishQuiz: (quizId: string) => void;
  isPublished: boolean;
}) {
  const [showModal, setShowModal] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
    setShowContextMenu(false);
  };

  const handleConfirmDelete = () => {
    deleteQuiz(quizId);
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  const handleContextMenuClick = () => {
    setShowContextMenu(!showContextMenu);
  };

  const handleEditClick = () => {
    navigateToQuizDetails(quizId);
    setShowContextMenu(false);
  };

  const handlePublishClick = () => {
    if (isPublished) {
      unpublishQuiz(quizId);
    } else {
      publishQuiz(quizId);
    }
    setShowContextMenu(false);
  };

  return (
    <div className="d-flex align-items-center position-relative">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" onClick={handleContextMenuClick} />

      {showContextMenu && (
        <div className="quiz-context-menu">
          <button className="dropdown-item" onClick={handleEditClick}>
            <FaPencilAlt className="me-2 text-primary" /> Edit
          </button>
          <button className="dropdown-item" onClick={handleDeleteClick}>
            <FaTrash className="me-2 text-danger" /> Delete
          </button>
          <button className="dropdown-item" onClick={handlePublishClick}>
            <MdCheckCircle className={`me-2 ${isPublished ? 'text-success' : ''}`} /> 
            {isPublished ? 'Unpublish' : 'Publish'}
          </button>
        </div>
      )}

      {showModal && (
        <div id="wd-delete-quiz-dialog" className="modal fade show" style={{ display: 'block' }} tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Confirm Delete</h1>
                <button type="button" className="btn-close" onClick={handleCancelDelete} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Are you sure you want to remove this quiz?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
