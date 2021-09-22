import React, { useEffect, useState, Suspense, lazy } from "react";
//hook
import useWindowDimensions from "../hooks/useWindowDimensions";
//components
import Leaderboards from "../components/Leaderboards";
const LazyDashboardComponent = lazy(() => import("../components/Dashboard"));

const Star = require("../svg/star.svg");
const Pie = require("../svg/pie-graph.svg");

const LiquidityDashboard = () => {
  // state
  const [switchedSmall, setSwitchedSmall] = useState(false);
  const [switchedLarge, setSwitchedLarge] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [showMoreAmount, setShowMoreAmount] = useState(false);
  const [leaderBoardsUsers, setLeaderBoardsUsers] = useState([]);

  // custom hooks
  const { width } = useWindowDimensions();
  // set switchedSmall appropraitly
  useEffect(() => {
    // console.log("what is width: ", width);
    if (width < 768 && !switchedSmall) {
      setShowMoreButton(true);
      setSwitchedSmall(true);
      setSwitchedLarge(false);
    }
    if (width >= 768 && !switchedLarge) {
      setShowMoreButton(false);
      setSwitchedLarge(true);
      setSwitchedSmall(false);
    }
  }, [width]);

  // get and set leadboard users
  // fetch data from server
  useEffect(() => {
    setLeaderBoardsUsers([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ]);
  }, []);

  return (
    <Container>
      <Heading />
      <div className={"flex justify-center "}>
        <div
          className={
            "grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-1 gap-x-10 min-w-9/12"
          }
        >
          {/* Leaderboard secton */}
          <div>
            <div className={"text-white pb-4 flex flex-row gap-4 "}>
              <div className={"center"}>
                <Star />
              </div>
              <p className={""}>Leaderboards</p>
            </div>
            <Leaderboards
              leaderBoardsUsers={leaderBoardsUsers}
              showMoreButton={showMoreButton}
              showMoreAmount={showMoreAmount}
              setShowMoreAmount={setShowMoreAmount}
              switchedSmall={switchedSmall}
            />
          </div>
          <div>
            {/* Dashboard secton */}
            <div className="h-add60px sm:h-add60px md:h-add20px mt-5 sm:mt-5 2xl:h-full 2xl:mt-0 gap-4 content-center">
              <div className={"text-white pb-4 flex flex-row gap-4 "}>
                <div className="center">
                  <Pie />
                </div>
                <p className={""}>Dashboard</p>
              </div>
              <Suspense fallback={<div />}>
                <LazyDashboardComponent />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      {/* tables and cards */}
      {switchedSmall && <div className={"h-24"}></div>}
      <div className={"sm:mt-0 md:mt-14 2xl:mt-0"}>
        {!switchedSmall ? <Tables /> : <Cards />}
      </div>

      <div className={"h-10"}></div>
    </Container>
  );
};

const Container = ({ children }) => (
  <div
    className={
      "bg-gradient-radial from-royalBlue-500 to-royalDarkBlue-500 min-h-screen min-width-6/12"
    }
  >
    {children}
  </div>
);

const Heading = () => (
  <p className="text-5xl font-black text-white text-center mb-10 pt-8">
    Royal Governance
    <br />
    Givaway
  </p>
);

// const Center = ({ children }) => (
//   <div className={"mt-auto mb-auto"}>{children}</div>
// );

const Tables = () => (
  <table className="w-5/6  mx-auto text-white">
    <tbody>
      <tr className="text-left border-b border-gray-500">
        <th className="w-80 py-3"></th>
        <th className="px-6 py-3 text-right">Amount</th>
        <th className="px-6 py-3 text-right">Price</th>
        <th className="px-4 py-3 text-right">Price/Token</th>
        <th className="w-20 text-right ">Time</th>
        <th className="w-20 py-3 pl-2">Tx</th>
      </tr>
      {/* next */}
      <tr className="border-b border-gray-600 text-dashboardGreen">
        <td id="button" className="px-2 py-1 text">
          <button>Buy</button>
        </td>
        <td id="amount" className="px-6 py-1 text-right">
          <div>
            <p>215,353</p>
            <p className={"text-xs"}>Royal</p>
          </div>
        </td>
        <td id="price" className="px-4 py-1 text-right ">
          <div>
            <p>$810.55</p>
            <p className={"text-xs"}>2.60000 BNB</p>
          </div>
        </td>
        <td id="token" className="px-4 py-1 text-right">
          <div>
            <p>$0.003764</p>
            <p className={"text-xs"}>Pc v2</p>
          </div>
        </td>
        <td id="time" className="py-1 text-right">
          <div>
            <p>4:46:56</p>
            <p className={"text-xs"}>PM</p>
          </div>
        </td>
        <td id="tx" className="py-1 pl-2 text-maxBlue">
          <div>
            <p>0x6ff9</p>
            <p className={"text-xs"}>Track</p>
          </div>
        </td>
      </tr>
      {/* next */}
      <tr className="border-b border-gray-600 text-dashboardGreen bg-royalBlueColumn-500">
        <td id="button" className="px-2 py-1 text">
          <button>Buy</button>
        </td>
        <td id="amount" className="px-6 py-1 text-right">
          <div>
            <p>215,353</p>
            <p className={"text-xs"}>Royal</p>
          </div>
        </td>
        <td id="price" className="px-4 py-1 text-right">
          <div>
            <p>$810.55</p>
            <p className={"text-xs"}>2.60000 BNB</p>
          </div>
        </td>
        <td id="token" className="px-4 py-1 text-right">
          <div>
            <p>$0.003764</p>
            <p className={"text-xs"}>Pc v2</p>
          </div>
        </td>
        <td id="time" className="py-1 text-right">
          <div>
            <p>4:46:56</p>
            <p className={"text-xs"}>PM</p>
          </div>
        </td>
        <td id="tx" className="py-1 pl-2 text-maxBlue">
          <div>
            <p>0x6ff9</p>
            <p className={"text-xs"}>Track</p>
          </div>
        </td>
      </tr>
      {/* next */}
      <tr className="border-b border-gray-600 text-dashboardGreen">
        <td id="button" className="px-2 py-1 text">
          <button>Buy</button>
        </td>
        <td id="amount" className="px-6 py-1 text-right">
          <div>
            <p>215,353</p>
            <p className={"text-xs"}>Royal</p>
          </div>
        </td>
        <td id="price" className="px-4 py-1 text-right">
          <div>
            <p>$810.55</p>
            <p className={"text-xs"}>2.60000 BNB</p>
          </div>
        </td>
        <td id="token" className="px-4 py-1 text-right">
          <div>
            <p>$0.003764</p>
            <p className={"text-xs"}>Pc v2</p>
          </div>
        </td>
        <td id="time" className="py-1 text-right">
          <div>
            <p>4:46:56</p>
            <p className={"text-xs"}>PM</p>
          </div>
        </td>
        <td id="tx" className="py-1 pl-2 text-maxBlue">
          <div>
            <p>0x6ff9</p>
            <p className={"text-xs"}>Track</p>
          </div>
        </td>
      </tr>
      {/* next */}
      <tr className="border-b border-gray-600 text-dashboardGreen bg-royalBlueColumn-500">
        <td id="button" className="px-2 py-1 text">
          <button>Buy</button>
        </td>
        <td id="amount" className="px-6 py-1 text-right">
          <div>
            <p>215,353</p>
            <p className={"text-xs"}>Royal</p>
          </div>
        </td>
        <td id="price" className="px-4 py-1 text-right">
          <div>
            <p>$810.55</p>
            <p className={"text-xs"}>2.60000 BNB</p>
          </div>
        </td>
        <td id="token" className="px-4 py-1 text-right">
          <div>
            <p>$0.003764</p>
            <p className={"text-xs"}>Pc v2</p>
          </div>
        </td>
        <td id="time" className="py-1 text-right">
          <div>
            <p>4:46:56</p>
            <p className={"text-xs"}>PM</p>
          </div>
        </td>
        <td id="tx" className="py-1 pl-2 text-maxBlue">
          <div>
            <p>0x6ff9</p>
            <p className={"text-xs"}>Track</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
);

const Cards = () => {
  return (
    <>
      <div className="mx-auto text-white w-80 border-t border-gray-600 ">
        <div className="px-2 py-1 text-dashboardGreen">
          <button>Buy</button>
        </div>
        <div className="mx-auto grid grid-cols-2 gap-2 p-2 ">
          <div className="flex flex-col">
            <span className=" font-bold">Amount</span>
            <p className={"text-dashboardGreen"}>$0.42423</p>
            <p className={"text-dashboardGreen text-xs"}>Royal</p>
          </div>
          <div className="flex flex-col text-right">
            <span className="uppercase text-sm font-bold">Price</span>
            <p className={"text-dashboardGreen"}>$810.55</p>
            <p className={"text-dashboardGreen text-xs "}>2.60000 BNB</p>
          </div>
          <div className="flex flex-col">
            <span className=" font-bold">Price/Token</span>
            <p className={"text-dashboardGreen"}>$0.003764</p>
            <p className={"text-dashboardGreen text-xs"}>Pc v2</p>
          </div>
          <div className="flex flex-col text-right">
            <span className="uppercase text-sm font-bold">Time</span>
            <p className={"text-dashboardGreen"}>4:46:56</p>
            <p className={"text-dashboardGreen text-xs "}>4:46:56</p>
          </div>
          <div className="flex flex-col ">
            <span className=" font-bold">Tx</span>
            <p className={"text-maxBlue"}>0x6ff9</p>
            <p className={"text-maxBlue text-xs"}>track</p>
          </div>
        </div>
      </div>
      {/* next */}
      <div className=" mx-auto text-white w-80 border-t border-gray-600 bg-royalBlueColumn-500 ">
        <div className="px-2 py-1 text-dashboardGreen">
          <button>Buy</button>
        </div>
        <div className="mx-auto grid grid-cols-2 gap-2 p-2 ">
          <div className="flex flex-col">
            <span className=" font-bold">Amount</span>
            <p className={"text-dashboardGreen"}>$0.42423</p>
            <p className={"text-dashboardGreen text-xs"}>Royal</p>
          </div>
          <div className="flex flex-col text-right">
            <span className="uppercase text-sm font-bold">Price</span>
            <p className={"text-dashboardGreen"}>$810.55</p>
            <p className={"text-dashboardGreen text-xs "}>2.60000 BNB</p>
          </div>
          <div className="flex flex-col">
            <span className=" font-bold">Price/Token</span>
            <p className={"text-dashboardGreen"}>$0.003764</p>
            <p className={"text-dashboardGreen text-xs"}>Pc v2</p>
          </div>
          <div className="flex flex-col text-right">
            <span className="uppercase text-sm font-bold">Time</span>
            <p className={"text-dashboardGreen"}>4:46:56</p>
            <p className={"text-dashboardGreen text-xs "}>4:46:56</p>
          </div>
          <div className="flex flex-col ">
            <span className=" font-bold">Tx</span>
            <p className={"text-maxBlue"}>0x6ff9</p>
            <p className={"text-maxBlue text-xs"}>track</p>
          </div>
        </div>
      </div>
      {/* next */}
      <div className=" mx-auto text-white w-80 border-t border-gray-600 ">
        <div className="px-2 py-1 text-dashboardGreen">
          <button>Buy</button>
        </div>
        <div className="mx-auto grid grid-cols-2 gap-2 p-2 ">
          <div className="flex flex-col">
            <span className=" font-bold">Amount</span>
            <p className={"text-dashboardGreen"}>$0.42423</p>
            <p className={"text-dashboardGreen text-xs"}>Royal</p>
          </div>
          <div className="flex flex-col text-right">
            <span className="uppercase text-sm font-bold">Price</span>
            <p className={"text-dashboardGreen"}>$810.55</p>
            <p className={"text-dashboardGreen text-xs "}>2.60000 BNB</p>
          </div>
          <div className="flex flex-col">
            <span className=" font-bold">Price/Token</span>
            <p className={"text-dashboardGreen"}>$0.003764</p>
            <p className={"text-dashboardGreen text-xs"}>Pc v2</p>
          </div>
          <div className="flex flex-col text-right">
            <span className="uppercase text-sm font-bold">Time</span>
            <p className={"text-dashboardGreen"}>4:46:56</p>
            <p className={"text-dashboardGreen text-xs "}>4:46:56</p>
          </div>
          <div className="flex flex-col ">
            <span className=" font-bold">Tx</span>
            <p className={"text-maxBlue"}>0x6ff9</p>
            <p className={"text-maxBlue text-xs"}>track</p>
          </div>
        </div>
      </div>
      {/* next */}
      <div className=" mx-auto text-white w-80 border-t border-gray-600 bg-royalBlueColumn-500 ">
        <div className="px-2 py-1 text-dashboardGreen">
          <button>Buy</button>
        </div>
        <div className="mx-auto grid grid-cols-2 gap-2 p-2 ">
          <div className="flex flex-col">
            <span className=" font-bold">Amount</span>
            <p className={"text-dashboardGreen"}>$0.42423</p>
            <p className={"text-dashboardGreen text-xs"}>Royal</p>
          </div>
          <div className="flex flex-col text-right">
            <span className="uppercase text-sm font-bold">Price</span>
            <p className={"text-dashboardGreen"}>$810.55</p>
            <p className={"text-dashboardGreen text-xs "}>2.60000 BNB</p>
          </div>
          <div className="flex flex-col">
            <span className=" font-bold">Price/Token</span>
            <p className={"text-dashboardGreen"}>$0.003764</p>
            <p className={"text-dashboardGreen text-xs"}>Pc v2</p>
          </div>
          <div className="flex flex-col text-right">
            <span className="uppercase text-sm font-bold">Time</span>
            <p className={"text-dashboardGreen"}>4:46:56</p>
            <p className={"text-dashboardGreen text-xs "}>4:46:56</p>
          </div>
          <div className="flex flex-col ">
            <span className=" font-bold">Tx</span>
            <p className={"text-maxBlue"}>0x6ff9</p>
            <p className={"text-maxBlue text-xs"}>track</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiquidityDashboard;
