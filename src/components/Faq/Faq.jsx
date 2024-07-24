import React from 'react'
import  { useState } from 'react';
import '../../style/faq.css'

const faqData = [
  {
    question: "How to contact with Customer Service?",
    answer: "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact: Email and Chat. We try to reply quickly, so you need not to wait too long for a response.",
  },
  {
    question: "App installation failed, how to update system information?",
    answer: "Here you would place the answer to this question.",
  },
  {
    question: "Website response taking time, how to improve?",
    answer: "Here you would place the answer to this question.",
  },
  {
    question: "How do I create an account?",
    answer: "Here you would place the answer to this question.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>F.A.Q</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h2>{item.question}</h2>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
        <div className='answer'>
          {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
