import React, { useState } from "react";

// TODO: start coding here!

const Calculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [tipInput, settipInput] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to calculate the tip amount and total price
  const calculateTipAndTotal = () => {
    const bill = parseFloat(billAmount);
    const tipPercent = parseFloat(tipPercentage);
    const people = parseFloat(numberOfPeople);
    const tipValue = parseFloat(tipInput);
    if (bill && tipPercent && people) {
      const tip = (bill * tipPercent) / 100;
      const total = (bill + tip) / people;
      setTipAmount(tip);
      setTotalPrice(total);
    } else if (bill && tipValue && people) {
      const tip = (bill * tipValue) / 100;
      const total = (bill + tip) / people;
      setTipAmount(tip);
      setTotalPrice(total);
    } else {
      setTipAmount(0);
      setTotalPrice(0);
    }
  };

  // Function to handle changes in bill amount
  const handleBillAmountChange = (event) => {
    setBillAmount(event.target.value);
    calculateTipAndTotal();
  };

  const handleTipPercentageChange = (percentage) => {
    setTipPercentage(percentage);
    calculateTipAndTotal();
  };
  const handleTipInput = (event) => {
    settipInput(event.target.value);
    calculateTipAndTotal();
  };

  // Function to handle changes in number of people
  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
    calculateTipAndTotal();
  };

  // Function to handle reset button click
  const handleReset = () => {
    setBillAmount(0);
    setTipPercentage(0);
    setNumberOfPeople(0);
    setTipAmount(0);
    setTotalPrice(0);
    settipInput(0);
  };

  return (
    <main>
      <img
        src="./icons/logo.svg"
        className="logo"
        alt="Splitter logo. 'SPLI' on one line and 'TTER' on another to indicate splitting."
      />
      <section className="card">
        <div className="card-left">
          <div className="input-group" id="totalBillGroup">
            <div className="input-label-container">
              <label className="body-text input-label" htmlFor="totalBill">
                Bill
              </label>
              <small className="body-text input-error" id="totalBillError">
                Input field is valid
              </small>
            </div>
            <input
              type="number"
              className="body-l-text input-field"
              placeholder="0"
              name="Total bill value"
              id="totalBill"
              value={billAmount}
              onChange={handleBillAmountChange}
            />
          </div>

          <div className="input-group" id="totalTipPercentageGroup">
            <div className="input-label-container">
              <label className="body-text input-label">Select Tip %</label>
              <small
                className="body-text input-error"
                id="totalTipPercentageError"
              >
                Input field is valid
              </small>
            </div>
            <div className="input-tips-container">
              <button
                className="body-l-text input-tip"
                id="tip5"
                onClick={() => handleTipPercentageChange(5)}
              >
                5%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip10"
                onClick={() => handleTipPercentageChange(10)}
              >
                10%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip15"
                onClick={() => handleTipPercentageChange(15)}
              >
                15%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip25"
                onClick={() => handleTipPercentageChange(25)}
              >
                25%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip50"
                onClick={() => handleTipPercentageChange(50)}
              >
                50%
              </button>

              <input
                type="number"
                className="body-l-text input-field"
                placeholder="Custom"
                id="totalTipPercentage"
                value={tipInput}
                onChange={handleTipInput}
              />
            </div>
          </div>

          <div className="input-group" id="numberOfPeopleGroup">
            <div className="input-label-container">
              <label className="body-text input-label" htmlFor="numberOfPeople">
                Number of People
              </label>
              <small className="body-text input-error" id="numberOfPeopleError">
                Input field is valid
              </small>
            </div>
            <input
              type="number"
              className="body-l-text input-field"
              placeholder="0"
              name="Number of people"
              id="numberOfPeople"
              value={numberOfPeople}
              onChange={handleNumberOfPeopleChange}
            />
          </div>
        </div>
        <div className="card-right">
          <section className="card-price-container">
            <div>
              <b className="body-text card-price-title">Tip Amount</b>
              <p className="body-s-text card-price-subtitle">/ person</p>
            </div>
            <strong className="strong-text card-price-value" id="tipAmount">
              ${tipAmount.toFixed(2)}
            </strong>
          </section>
          <section className="card-price-container">
            <div>
              <b className="body-text card-price-title">Total</b>
              <p className="body-s-text card-price-subtitle">/ person</p>
            </div>
            <strong className="strong-text card-price-value" id="totalPrice">
              ${totalPrice.toFixed(2)}
            </strong>
          </section>
          <button className="btn btn-primary btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default Calculator;
