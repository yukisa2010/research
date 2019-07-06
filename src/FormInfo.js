import React from "react";

const FormInfo = () => {
  let years = [];
  let months = [];
  let days = [];

  for (let i = 1950; i < 2020; i++) {
    years.push(<option>{i}</option>);
  }
  for (let i = 1; i <= 12; i++) {
    months.push(<option>{i}</option>);
  }
  for (let i = 1; i <= 31; i++) {
    days.push(<option>{i}</option>);
  }

  return (
    <div className="forminfo">
      <div className="person-name">
        <label>お名前</label>
        <input type="text" />
      </div>
      <div className="birth">
        <span>生年月日 </span>
        <div className="birthday">
          <select>{years}</select>
          <span>年</span>
          <select>{months}</select>
          <span>月</span>
          <select>{days}</select>
          <span>日</span>
        </div>
      </div>
      <div className="post-number">
        <span>郵便番号</span>
        <input type="text" />
      </div>
      <div className="address">
        <label>住所</label>
        <input type="text" />
      </div>
      <div className="tel-number">
        <label>電話番号（ハイフンなし）</label>
        <input type="text" />
      </div>
      <div className="phone">
        <input type="radio" name="tel" />
        <label>自宅</label>
        <input type="radio" name="tel" />
        <label>携帯</label>
      </div>
      <div className="company">
        <label>勤務先名</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default FormInfo;
