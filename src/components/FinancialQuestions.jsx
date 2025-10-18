import React from 'react';

const FinancialQuestions = () => {
  return (
    <div className="financial-questions">
      <h2>Financial Questions</h2>
      <form>
        <div className="form-group">
          <label htmlFor="monthly-income">What is your monthly income?</label>
          <input type="text" id="monthly-income" name="monthly-income" />
        </div>
        <div className="form-group">
          <label htmlFor="monthly-payment">What is your target monthly payment?</label>
          <input type="text" id="monthly-payment" name="monthly-payment" />
        </div>
        <div className="form-group">
          <label>Are multiple people owning one car?</label>
          <div className="radio-group">
            <input type="radio" id="yes" name="multiple-owners" value="yes" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="multiple-owners" value="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FinancialQuestions;
