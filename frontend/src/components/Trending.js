import React from 'react'
import TrendingFeed from "./TrendingFeed";
import QuoraHeader from "./QuoraHeader";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
const Trending = () => {
  return (
    <div className="quora">
      <QuoraHeader />

      <div className="quora__contents">

            <div className="cSide"><Sidebar /></div>
            <div className="cFeed"><TrendingFeed /></div>
            <div className="cWidget"><Widget /></div>

      </div>
    </div>
  );
}

export default Trending