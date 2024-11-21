import React, { useState } from 'react';

function Help() {
  const [questions] = useState([
    {
      id: 1,
      question: 'How can I track my order?',
      answer: 'You can track your order by clicking on the tracking link sent to your email after the order is shipped.',
    },
    {
      id: 2,
      question: 'What is your return policy?',
      answer: 'You can return any item within 30 days of receipt for a full refund, provided it is in its original condition.',
    },
    {
      id: 3,
      question: 'How can I contact customer support?',
      answer: 'You can contact customer support through the contact form or by emailing support@example.com.',
    },
  ]);

  const [userQuestion, setUserQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userQuestion.trim()) {
      // Here you can send the user question to a backend service or handle it as needed
      console.log('User question submitted:', userQuestion);
      setUserQuestion('');
      setSubmitted(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Help & Support</h2>

        <h3 className="text-xl font-semibold mb-2 text-white">Frequently Asked Questions</h3>
        <div className="mb-4 text-gray-300">
          {questions.map(({ id, question, answer }) => (
            <div key={id} className="mb-4">
              <p className="font-bold text-gray-200">{question}</p>
              <p>{answer}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-2 text-white">Ask Your Question</h3>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <textarea
            placeholder="Type your question here..."
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            className="border rounded p-2 mb-2 bg-gray-700 text-gray-300"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <p className="text-green-500 mt-4">Thank you! Your question has been submitted.</p>
        )}
      </div>
    </div>
  );
}

export default Help;
