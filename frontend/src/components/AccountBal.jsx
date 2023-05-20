import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import axios from "axios";

const AccountBal = () => {
  const auth = useSelector((state) => state.auth);
  const [currency, setCurrency] = useState("");
  const [amountConverted, setAmountConverted] = useState("");
  const [newSymbol, setNewSymbol] = useState("");
  const [currencyList, setCurrencyList] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    // Fetch exchange rates from an API
    const fetchExchangeRates = async () => {
      const options = {
        method: "GET",
        url: "https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies",
        headers: {
          "X-RapidAPI-Key":
            "59037cf1fcmshba9ceea6063766cp196fcajsna2e6a26eb492",
          "X-RapidAPI-Host": "currency-converter18.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const currencies = response.data.map((currency) => currency.symbol);
        const uniqueCurrencies = [...new Set(currencies)]; // Remove duplicates
        setCurrencyList(uniqueCurrencies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExchangeRates();
  }, []);

  const balance = auth.balance;

  useEffect(() => {
    // Fetch exchange rates from an API
    const convertCurrency = async () => {
      const options = {
        method: "GET",
        url: "https://currency-converter18.p.rapidapi.com/api/v1/convert",
        params: {
          from: "USD",
          to: currency,
          amount: amount,
        },
        headers: {
          "X-RapidAPI-Key":
            "59037cf1fcmshba9ceea6063766cp196fcajsna2e6a26eb492",
          "X-RapidAPI-Host": "currency-converter18.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const convertedAmount = parseFloat(
          response.data.result.convertedAmount
        ).toFixed(2);
        setAmountConverted(convertedAmount);
        setNewSymbol(response.data.result.to);
      } catch (error) {
        console.error(error);
      }
    };

    convertCurrency();
  }, [currency, balance]);

  return (
    <div className="flex flex-col mb-10 h-[100%] bg-white items-center justify-center  ">
      <h1 className="text-[20px] my-6">Account Balance</h1>
      <span className="items-center justify-center flex flex-row">
        {auth._id ? (
          <>
            {auth.balance ? (
              <>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col  ">
                    <div className="flex">
                      <span className="text-yellow-400 flex flex-row">$</span>
                      <p>{auth.balance} </p>
                    </div>
                  </div>

                  <h1 className="text-[20px] my-6">Currency Converter</h1>
                  <input
                    placeholder="Amount in dollars"
                    className="border-2 p-2 mb-10"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="border-2"
                  >
                    <option>Choose your currency</option>
                    {currencyList.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                  <div className="flex text-[40px] gap-2 m-10">
                    <span className="text-yellow-400 flex flex-row ">
                      {newSymbol}
                    </span>
                    <p>{amountConverted}</p>
                  </div>
                </div>
              </>
            ) : (
              <p>0</p>
            )}
          </>
        ) : (
          <>
            <Link to="/login">
              <p className="text-blue-500 text-[15px] gap-2 flex pt-56">
                Login to check your balance
                <ArrowRightAltIcon className="text-black" />
              </p>
            </Link>
          </>
        )}
      </span>
    </div>
  );
};

export default AccountBal;
