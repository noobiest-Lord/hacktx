import React from 'react';

const LifestyleQuestions = () => {
  return (
    <div className="lifestyle-questions">
      <h2>Lifestyle Questions</h2>
      <form>
        <div className="form-group">
          <label htmlFor="daily-commute">What is your daily commute?</label>
          <input type="text" id="daily-commute" name="daily-commute" />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">How many people do you typically drive?</label>
          <input type="number" id="passengers" name="passengers" />
        </div>
        <div className="form-group">
          <label>Do you prefer a Sedan or an SUV?</label>
          <div className="radio-group">
            <input type="radio" id="sedan" name="vehicle-type" value="sedan" />
            <label htmlFor="sedan">Sedan</label>
            <input type="radio" id="suv" name="vehicle-type" value="suv" />
            <label htmlFor="suv">SUV</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LifestyleQuestions;
