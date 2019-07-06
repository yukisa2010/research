import React from "react";
import GiftItem from "./GiftItem";

const TableComponent = () => (
  <table>
    <tr>
      <td>
        <GiftItem />
      </td>
      <td>
        <GiftItem />
      </td>
      <td>
        <GiftItem />
      </td>
    </tr>
    <tr>
      <td>
        <GiftItem />
      </td>
      <td>
        <GiftItem />
      </td>
      <td>
        <GiftItem />
      </td>
    </tr>
  </table>
);

export default TableComponent;
