import React, { useState } from "react";
import "./style.css";

const Question = () => {
  
  const [questionText, setQuestionText] = useState('');
  
  const handleQuestion = (e) => {
    setQuestionText(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestionText('');
  }



  return (
    <div className="container">
      <h1>Create new question</h1>

      <form onSubmit={handleSubmit}>
        <div className="input">
          <span>Question</span>
          <textarea value={questionText} onChange={handleQuestion} />
        </div>

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Question;
