import InputLabel from "@/components/InputLabel";
import React from "react";
import TableNumber from "../../order/components/TableNumber";

const CustomerInformation = () => {
  return (
    <>
      <div className="sub-h2">Customer Information</div>

      <InputLabel
        icon="user"
        label="Fullname"
        name="fullname"
        placeholder="John Due"
      />
      <InputLabel
        icon="phone"
        label="Phone Number (for upcoming promos)"
        name="phone"
        placeholder="0812-3456-7899"
      />
      <InputLabel
        icon="email"
        label="Send receipt to email"
        name="email"
        placeholder="user123@gmail.com"
      />

      <TableNumber />


    </>
  );
};

export default CustomerInformation;
