import React, { useState, useEffect } from "react";

const RechargeRecords = () => {
  const [depositIndex, setDepositIndex] = useState(0);
  const [withdrawalIndex, setWithdrawalIndex] = useState(0);

  const records = [
    {
      name: "Brian",
      Contact: "*******897",
      depAmount: "90",
      withAmount: "890",
    },
    {
      name: "Paul",
      Contact: "*******847",
      depAmount: "600",
      withAmount: "7500",
    },
    {
      name: "Milly",
      Contact: "*******123",
      depAmount: "120",
      withAmount: "700",
    },
    {
      name: "Jane",
      Contact: "*******943",
      depAmount: "600",
      withAmount: "4500",
    },
    {
      name: "Frank",
      Contact: "*******723",
      depAmount: "170",
      withAmount: "4898",
    },
    {
      name: "Stev",
      Contact: "*******173",
      depAmount: "100",
      withAmount: "2000",
    },
    {
      name: "Brian",
      Contact: "*******473",
      depAmount: "250",
      withAmount: "500",
    },
    {
      name: "Brian",
      Contact: "*******284",
      depAmount: "150",
      withAmount: "1000",
    },
    {
      name: "Brian",
      Contact: "*******094",
      depAmount: "20",
      withAmount: "300",
    },
    {
      name: "Brian",
      Contact: "*******275",
      depAmount: "50",
      withAmount: "200",
    },
    {
      name: "Brian",
      Contact: "*******678",
      depAmount: "187",
      withAmount: "1112",
    },
    {
      name: "Brian",
      Contact: "*******990",
      depAmount: "200",
      withAmount: "5000",
    },
    {
      name: "Brian",
      Contact: "*******324",
      depAmount: "400",
      withAmount: "2950",
    },
    {
      name: "Brian",
      Contact: "*******984",
      depAmount: "984",
      withAmount: "10000",
    },
    {
      name: "Brian",
      Contact: "*******573",
      depAmount: "700",
      withAmount: "7000",
    },
    {
      name: "Brian",
      Contact: "*******129",
      depAmount: "300",
      withAmount: "7344",
    },
    {
      name: "Brian",
      Contact: "*******847",
      depAmount: "500",
      withAmount: "8000",
    },
    {
      name: "Brian",
      Contact: "*******445",
      depAmount: "100",
      withAmount: "2900",
    },
  ];

  useEffect(() => {
    const changeDepositRecord = () => {
      const randomIndex = Math.floor(Math.random() * records.length);
      setDepositIndex(randomIndex);
      const randomTime = Math.random() * 1000 + 2000; // Random time between 1 and 3 seconds
      setTimeout(changeDepositRecord, randomTime);
    };

    const changeWithdrawalRecord = () => {
      const randomIndex = Math.floor(Math.random() * records.length);
      setWithdrawalIndex(randomIndex);
      const randomTime = Math.random() * 1000 + 2000; // Random time between 1 and 3 seconds
      setTimeout(changeWithdrawalRecord, randomTime);
    };

    const depositTimer = setTimeout(changeDepositRecord, 1000); // Initial delay of 1 second
    const withdrawalTimer = setTimeout(changeWithdrawalRecord, 2000); // Initial delay of 2 seconds

    return () => {
      clearTimeout(depositTimer);
      clearTimeout(withdrawalTimer);
    };
  }, [records.length]);

  return (
    <div className="bg-brown items-center flex flex-col gap-6 border-b pb-8">
      <div className="text-white flex flex-col items-center  gap-2">
        <h1 className="text-yellow-300">Deposits</h1>
        <div className="flex flex-row gap-4">
          <div>{records[depositIndex].Contact}</div>
          <div>deposit</div>
          <div>
            {records[depositIndex].depAmount}
            <span className="text-yellow-300">$</span>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col items-center gap-2  ">
        <h1 className="text-yellow-300">Withdrawals</h1>
        <div className="flex flex-row gap-4 ">
          <div>{records[withdrawalIndex].Contact}</div>
          <div>withdrawal</div>
          <div>
            {records[withdrawalIndex].withAmount}
            <span className="text-yellow-300">$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RechargeRecords;
