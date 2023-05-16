import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import Loader from "./Loader";
import millify from "millify";

const TopCryptos = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <div className="text-black ">
      <div className="m-2 ml-10">
        <h1>Markets</h1>
      </div>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <div>
        {cryptos?.map((currency) => (
          <>
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <div className="flex gap-2 border-2 p-2 justify-between px-10 text-[12px]">
                <div className="flex flex-row gap-2">
                  <p>{currency.rank}.</p>
                  <img className="crypto-image w-10 " src={currency.iconUrl} />
                  <div>
                    <p>${currency.name}</p>
                    <p>{currency.symbol}</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <p>{millify(currency.marketCap)}</p>
                  <p
                    className={`${
                      currency.change < 0 ? "text-red" : "text-green-600"
                    }`}
                  >
                    {currency.change}%
                  </p>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default TopCryptos;
