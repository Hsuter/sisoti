import React, { useState } from "react";
import { qr } from "../assets";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { toast } from "react-toastify";

const Recharge = () => {
  const [isCopied, setIsCopied] = useState(false);
  const walletAddress = "TGCTL59267B7ai423VKgAXuy2KJxrNxp2H";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setIsCopied(true);
      toast.success("Text copied successfully!");
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div className="flex w-full pb-28 gap-2 flex-col  items-center bg-gray-400 text-black rounded-t-lg">
      <div className="flex flex-col items-center">
        <h1 className="font-bold ">USDT</h1>
        <p className="font-bold text-yellow-300">
          Follow the instractions below to deposit
        </p>
      </div>

      <div className="items-center flex flex-col gap-2">
        <h1>Wallet Address (TRC20)</h1>
        <p className="border-2 bg-blue-200">
          {walletAddress}
          <span onClick={copyToClipboard}>
            <ContentCopyOutlinedIcon />
          </span>
        </p>

        <div>
          <img src={qr} alt="qr_code" />
        </div>
      </div>

      <div className="text-[12px]">
        <li>Copy the wallet adress</li>
        <li>Proceed to binance</li>
        <li>Deposit under USDT(Low charges,fast transaction time)</li>
        <li>Select Tron network</li>
        <li>Deposit</li>
        <li>That's it,Time to make some profit</li>
      </div>
    </div>
  );
};

export default Recharge;
