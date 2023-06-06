import React, { useRef } from 'react';

const Calculator = () => {
  const billAmountRef = useRef(null);
  const tipPercentageRef = useRef(null);
  const numberOfPeopleRef = useRef(null);

  const tipAmountRef = useRef(null);
  const totalPriceRef = useRef(null);

  const handleCalculate = () => {
    const bill = parseFloat(billAmountRef.current.value);
    const tipPercent = parseFloat(tipPercentageRef.current.value);
    const people = parseFloat(numberOfPeopleRef.current.value);

    if (bill && tipPercent && people) {
      const tip = (bill * tipPercent) / 100;
      const total = (bill + tip) / people;

      tipAmountRef.current.textContent = `$${tip.toFixed(2)}`;
      totalPriceRef.current.textContent = `$${total.toFixed(2)}`;
    } else {
      tipAmountRef.current.textContent = '$0.00';
      totalPriceRef.current.textContent = '$0.00';
    }
  };

  const handleReset = () => {
    billAmountRef.current.value = '';
    tipPercentageRef.current.value = '';
    numberOfPeopleRef.current.value = '';

    tipAmountRef.current.textContent = '$0.00';
    totalPriceRef.current.textContent = '$0.00';
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
              ref={billAmountRef}
              onChange={handleCalculate}
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
                onClick={() => {
                  tipPercentageRef.current.value = '5';
                  handleCalculate();
                }}
              >
                5%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip10"
                onClick={() => {
                  tipPercentageRef.current.value = '10';
                  handleCalculate();
                }}
              >
                10%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip15"
                onClick={() => {
                  tipPercentageRef.current.value = '15';
                  handleCalculate();
                }}
              >
                15%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip25"
                onClick={() => {
                  tipPercentageRef.current.value = '25';
                  handleCalculate();
                }}
              >
                25%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip50"
                onClick={() => {
                  tipPercentageRef.current.value = '50';
                  handleCalculate();
                }}
              >
                50%
              </button>
              <input
                type="number"
                className="body-l-text input-field"
                placeholder="Custom"
                id="totalTipPercentage"
                ref={tipPercentageRef}
                onChange={handleCalculate}
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
              ref={numberOfPeopleRef}
              onChange={handleCalculate}
            />
          </div>
        </div>
        <div className="card-right">
          <section className="card-price-container">
            <div>
              <b className="body-text card-price-title">Tip Amount</b>
              <p className="body-s-text card-price-subtitle">/ person</p>
            </div>
            <strong
              className="strong-text card-price-value"
              id="tipAmount"
              ref={tipAmountRef}
            >
              $0.00
            </strong>
          </section>
          <section className="card-price-container">
            <div>
              <b className="body-text card-price-title">Total</b>
              <p className="body-s-text card-price-subtitle">/ person</p>
            </div>
            <strong
              className="strong-text card-price-value"
              id="totalPrice"
              ref={totalPriceRef}
            >
              $0.00
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
