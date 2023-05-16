import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "../components/Loader";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  if (!cryptoNews?.value) return <Loader />;
  return (
    <div className="flex flex-col justify-around items-center bg-white">
      <h1 className="font-bold text-[50px] underline m-2 ">Trending News</h1>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => (
              <Option value={currency.name}>{currency.name}</Option>
            ))}
          </Select>
        </Col>
      )}

      <div className="flex md:flex-row justify-around items-center flex-wrap gap-10 m-20">
        {cryptoNews.value.map((news, i) => (
          <div
            className="flex flex-col  w-[300px] h-[300px] border-4 shadow-md p-2"
            key={i}
          >
            <div className="flex flex-row ">
              <h1 className="text-[15px] font-bold">{news.name}</h1>
              <img
                className="w-[50px] h-[100px]"
                src={news?.image?.thumbnail?.contentUrl || demoImage}
                alt=""
              />
            </div>

            <p>
              {news.description.length > 100
                ? `${news.description.substring(0, 100)}...`
                : news.description}
            </p>
            <Avatar
              src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
              alt=""
            />
            <Text className="provider-name">{news.provider[0]?.name}</Text>
            <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
