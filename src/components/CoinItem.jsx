import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";

const CoinItem = ({ coin }) => {
  return (
    <tr
      key={coin.id}
      className="h-[60px] border-b overflow-hidden text-sm md:text-lg"
    >
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center font-semibold">
            <img
              src={coin.image}
              alt={coin.id}
              className="w-5 sm:w-6  mr-1 rounded-full"
            />
            <p className="hidden sm:table-cell">{coin.name}</p>
          </div>
        </Link>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0
            ? "text-teal-600"
            : "text-red-600"
        }
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td className=" hidden lg:table-cell">
        ${coin.total_volume.toLocaleString()}
      </td>
      <td className="  hidden md:table-cell">
        ${coin.market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine
            color={coin.price_change_percentage_24h > 0 ? "teal" : "red"}
          />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
