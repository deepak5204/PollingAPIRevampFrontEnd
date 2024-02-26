import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Question = () => {
  
  const [question, setQuestion] = useState('');
  
  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/v2/question', {
        question: question
      });

      setQuestion('')
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <h1>Create new question</h1>

      <form onSubmit={handleSubmit}>
        <div className="input">
          <span>Question</span>
          <textarea value={question} onChange={handleQuestion} />
        </div>

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Question;
