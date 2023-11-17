import React, { useState } from 'react';
import '../../css/faq.css'

export default function Faq() {
  const [answersVisible, setAnswersVisible] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggleAnswer = (questionId) => {
    setAnswersVisible((prevAnswersVisible) => ({
      ...prevAnswersVisible,
      [questionId]: !prevAnswersVisible[questionId],
    }));
  };

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <div className="faq-question" onClick={() => toggleAnswer(1)}>
        <strong>Can I do exercises if I am in pain?</strong>
        {answersVisible[1] && (
          <div className="faq-answer">
            Yes, in many cases, gentle exercises can help alleviate pain. However, it's important to consult with a healthcare professional for personalized advice.
          </div>
        )}
      </div>
      <div className="faq-question" onClick={() => toggleAnswer(2)}>
        <strong>Do I need a diagnosis/scan to be treated?</strong>
        {answersVisible[2] && (
          <div className="faq-answer">
            The need for a diagnosis or scan depends on the specific situation. It's recommended to consult with a healthcare professional to determine the appropriate course of action.
          </div>
        )}
      </div>
      <div className="faq-question" onClick={() => toggleAnswer(3)}>
        <strong>Should I stay in bed when I am in pain?</strong>
        {answersVisible[3] && (
          <div className="faq-answer">
            Staying in bed for extended periods may not be beneficial. It's often better to stay active within your pain limits. Consult with a healthcare professional for personalized advice.
          </div>
        )}
      </div>
      <div className="faq-question" onClick={() => toggleAnswer(4)}>
        <strong>Is there any one exercise I should be doing?</strong>
        {answersVisible[4] && (
          <div className="faq-answer">
            There is no one-size-fits-all exercise. The best exercises depend on your specific condition. Seek guidance from a healthcare professional or a qualified fitness expert.
          </div>
        )}
      </div>
      <div className="faq-question" onClick={() => toggleAnswer(5)}>
        <strong>What is the best posture?</strong>
        {answersVisible[5] && (
          <div className="faq-answer">
            The ideal posture varies for each individual. Maintaining good posture is important, but it's advisable to consult with a healthcare professional for personalized recommendations.
          </div>
        )}
      </div>
    </div>
  );
}
