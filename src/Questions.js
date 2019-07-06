import React from "react";

const Questions = props => {
  const questionItem = [
    "年金に不安はありますか？",
    "年金対策はしていますか？",
    "資産運用に興味はありますか？",
    "結婚はされていますか？",
    "現在の勤務形態は？",
    "現在の勤続年数は？",
    "勤務先企業の規模は？",
    "現在の居住形態は？"
  ];

  const radiogroup = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"];

  return (
    <table className="questions">
      <tr>
        <td>
          <p>{questionItem[0]}</p>
          <div>
            <input type="radio" name={props.group} />
            <label>はい</label>
            <input type="radio" name={props.group} />
            <label>いいえ</label>
          </div>
        </td>
        <td>
          <p>{questionItem[1]}</p>
          <div>
            <input type="radio" name={props.group} />
            <label>はい</label>
            <input type="radio" name={props.group} />
            <label>いいえ</label>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <p>{questionItem[2]}</p>
          <div>
            <input type="radio" name={props.group} />
            <label>はい</label>
            <input type="radio" name={props.group} />
            <label>いいえ</label>
          </div>
        </td>
        <td>
          <p>{questionItem[3]}</p>
          <div>
            <input type="radio" name={props.group} />
            <label>はい</label>
            <input type="radio" name={props.group} />
            <label>いいえ</label>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <p>{questionItem[4]}</p>
          <div>
            <input type="radio" name={props.group} />
            <label>1, 経営者・役員</label>
            <input type="radio" name={props.group} />
            <label>2, 正社員</label>
            <input type="radio" name={props.group} />
            <label>3, 契約社員・派遣</label>
            <input type="radio" name={props.group} />
            <label>4, アルバイト、フリーター、無職</label>
          </div>
        </td>
        <td>
          <p>{questionItem[5]}</p>
          <div>
            <input type="radio" name={props.group} />
            <label>1, 1年未満</label>
            <input type="radio" name={props.group} />
            <label>2, 3年未満</label>
            <input type="radio" name={props.group} />
            <label>3, 10年未満</label>
            <input type="radio" name={props.group} />
            <label>4, 10年以上</label>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <p>{questionItem[6]}</p>
          <div>
            <input type="radio" name={props.group} />
            <label>1, 上場企業、準ずる企業</label>
            <input type="radio" name={props.group} />
            <label>2, 中小企業</label>
            <input type="radio" name={props.group} />
            <label>3, 国営・政府関係</label>
            <input type="radio" name={props.group} />
            <label>4, 外資系企業</label>
          </div>
        </td>
        <td>
          <p>{questionItem[7]}</p>
          <div>
            <input type="radio" name={props.group} />
            <label>1, 家族所有</label>
            <input type="radio" name={props.group} />
            <label>2, 自己所有</label>
            <input type="radio" name={props.group} />
            <label>3, 賃貸</label>
            <input type="radio" name={props.group} />
            <label>4, 社宅・寮</label>
          </div>
        </td>
      </tr>
    </table>
  );
};

export default Questions;
