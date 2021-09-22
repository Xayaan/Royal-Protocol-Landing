import React, { useState, useEffect, useRef, useCallback } from "react";
import Web3Modal from "web3modal";
import { providers } from "ethers";
import { Helmet } from "react-helmet";
import { anonymousNameGenerator } from "../helpers/anonymousNameGenerator";

//(still havent figured out why index.d.ts only work when file is open)
// import Close from "../svg/close.svg";
// import Information from "../svg/information.svg";
// import InformationGray from "../svg/information-gray.svg";
// import Caret from "../svg/caret.svg";
// import BNB from "../svg/crypto/bnb.svg";
const Close = require("../svg/close.svg");
const Information = require("../svg/information.svg");
const InformationGray = require("../svg/information-gray.svg");
const Caret = require("../svg/caret.svg");
const BNB = require("../svg/crypto/bnb.svg");

interface Web3Context {
  chainId: number;
  address: string;
}

let web3Modal;

export default function Dashboard() {
  // state
  const [web3Context, setWeb3Context] = React.useState<
    Web3Context | undefined
  >();
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [balance, setBalance] = useState(7647455423421);
  const [dashboardPercent, setDashboardPercent] = useState(22);
  const [progressBarPercent, setProgresBarPercent] = useState("88%");

  // ref
  const circle = useRef(null);

  const connectWeb3 = async () => {
    // @ts-ignore
    // reguire web3-provider.min.js to use walletConnectProvider
    const WalletConnectProvider = window.WalletConnectProvider.default;

    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            56: "https://bsc-dataseed.binance.org/",
            97: "https://data-seed-prebsc-1-s1.binance.org:8545"
          },
          network: "binance"
        }
      }
    };

    web3Modal = new Web3Modal({
      network: "mainnet",
      providerOptions
    });

    web3Modal.clearCachedProvider();

    let web3;

    try {
      web3 = await web3Modal.connect();
    } catch (err) {
      console.log(err);
      return;
    }

    const provider = new providers.Web3Provider(web3);
    const network = await provider.getNetwork();
    const address = await provider.getSigner().getAddress();

    setWeb3Context({
      chainId: network.chainId,
      address
    });
  };

  const disconnect = async () => {
    console.log("web3Modal: ", web3Modal);
    web3Modal.clearCachedProvider();
    setWeb3Context(undefined);
  };

  // refs must use a callback instead of useEffect
  const setCircleRef = useCallback(node => {
    if (circle.current) {
      // Make sure to cleanup any events/references added to the last instance
      console.log("circle.current", circle.current);
    }

    // edit circle
    if (node) {
      circle.current = node;
      const radius = node.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;

      circle.current.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.current.style.strokeDashoffset = circumference;

      const offset = circumference - (dashboardPercent / 100) * circumference;
      circle.current.style.strokeDashoffset = offset;
    }
  }, []);

  return (
    <>
      <Helmet>
        <script type="text/javascript" src="web3-provider.min.js" />
      </Helmet>

      {!web3Context && (
        <div className={"h-full flex flex-1 justify-center items-center"}>
          {!web3Context && (
            <button className={"lq-btn btn-green "} onClick={connectWeb3}>
              Connect
            </button>
          )}
        </div>
      )}

      {web3Context && (
        <DashboardSection
          walletAddress={web3Context?.address}
          progressBarPercent={progressBarPercent}
          setCircleRef={setCircleRef}
          dashboardPercent={dashboardPercent}
          setShowDepositModal={setShowDepositModal}
          setShowWithdrawModal={setShowWithdrawModal}
          showDepositModal={showDepositModal}
          showWithdrawModal={showWithdrawModal}
          disconnect={disconnect}
          balance={balance}
        />
      )}
    </>
  );
}

const DashboardSection = ({
  walletAddress,
  progressBarPercent,
  setCircleRef,
  dashboardPercent,
  setShowDepositModal,
  setShowWithdrawModal,
  showDepositModal,
  showWithdrawModal,
  disconnect,
  balance
}) => {
  const anonName = anonymousNameGenerator({ walletAddress });
  return (
    <div className={"flex flex-col h-full"}>
      <div
        className={
          "bg-generatedNameBackground-500 h-12 flex justify-center items-center w-full"
        }
      >
        <p className={"text-center text-generatedName-500 "}>{anonName}</p>
      </div>
      <div
        className={
          "flex flex-col justify-between flex-1 bg-royalBlueColumn-500 mb-10 pl-5 pr-5"
        }
      >
        <div className={"flex justify-center items-end h-18"}>
          <p className={"text-userRank text-6xl font-extrabold italic"}>#142</p>
          <p className={"text-white text-2xl inline-block  items-bottom "}>
            /1234
          </p>
        </div>

        <div>
          <p className={"text-gray-400 text-sm pb-2"}>Time until next cycle</p>
          <div
            className={"bg-leaderBoardTimeSliderBackground h-0.5 w-full mb-8"}
          >
            <div className="tooltip" style={{ width: progressBarPercent }}>
              <div className="tooltiptext">12:43</div>
            </div>
          </div>
        </div>

        {/* start */}
        <div className={"flex flex-col md:flex-row "}>
          <div className={"flex sm:w-full md:w-2/4 flex-1 gap-4 "}>
            <div className={"w-full h-22"}>
              <p className={"text-white"}>Roy(Royal/USD)</p>
              <p className={"text-dashboardGreen pb-2"}>$0.00799450</p>
              <div
                className={
                  "flex flex-row w-full p-2 border-t border-b border-gray-400 justify-between items-center"
                }
              >
                <p className={"text-gray-400 text-sm"}>Total Deposited</p>
                <p className={"text-white "}>400 Royal</p>
              </div>
              <div
                className={
                  "flex flex-row w-full p-2 justify-between items-center "
                }
              >
                <p className={"text-gray-400 text-sm "}>Total Rewards</p>
                <p className={"text-white "}>84 GROY</p>
              </div>
              <div
                className={
                  "flex flex-row w-full p-2 border-t border-b border-gray-400 justify-between items-center "
                }
              >
                <p className={"text-gray-400 text-sm "}>
                  Estimates for next cycle
                </p>
                <p className={"text-white "}>84 GROY</p>
              </div>
            </div>
          </div>
          {/* split */}
          <div className={"flex flex-col sm:w-full md:w-2/4 "}>
            <div className={"text-left md:text-right mt-2 md:mt-0 "}>
              <p className={"text-white"}>To Next Rank</p>
              <p className={"text-dashboardGreen"}>1000 ROY</p>
            </div>
            <div className={"flex flex-col justify-center items-center "}>
              <div className={"flex justify-center items-center"}>
                <svg className="progress-ring" width="120" height="120">
                  <circle
                    stroke="#1a3349"
                    strokeWidth="8"
                    fill="transparent"
                    r="52"
                    cx="60"
                    cy="60"
                  />
                  <circle
                    className="progress-ring__circle"
                    ref={setCircleRef}
                    stroke="#FF6978"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="transparent"
                    r="52"
                    cx="60"
                    cy="60"
                  />
                </svg>
              </div>
              <div
                className={
                  "flex flex-col w-15 justify-center items-center text-white absolute"
                }
              >
                <p className={"text-2xl font-semibold"}>{dashboardPercent}%</p>
                <p className={"text-xxs"}>to next rank</p>
              </div>
            </div>
          </div>
          {/* here */}
        </div>

        <div className={" flex flex-row  gap-4 "}>
          <button
            className={"flex-1 lq-btn btn-yellow"}
            onClick={() => setShowDepositModal(true)}
          >
            Deposit
          </button>
          <button
            className={"flex-1 lq-btn btn-yellow text-white"}
            onClick={() => setShowWithdrawModal(true)}
          >
            Withdraw
          </button>
        </div>
        <button
          className={" lq-btn btn-royal-red w-full mb-4 "}
          onClick={disconnect}
        >
          Claim 84 GROY
        </button>

        {showDepositModal && (
          <DepositModal
            balance={balance}
            setShowDepositModal={setShowDepositModal}
          />
        )}
        {showWithdrawModal && (
          <WithdrawModal
            balance={balance}
            setShowWithdrawModal={setShowWithdrawModal}
          />
        )}
      </div>
    </div>
  );
};

const DepositModal = ({ balance, setShowDepositModal }) => {
  const [inputTop, setInputTop] = useState("");
  const [inputBottom, setInputBottom] = useState("");

  const inputTopChangeHandler = e => {
    console.log("inputTopChangeHandler : ", e.target.value);
    setInputTop(e.target.value);
  };

  const inputBottomChangeHandeler = e => {
    console.log("inputBottomChangeHandeler: ", e.target.value);
    setInputBottom(e.target.value);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          onClick={() => {
            setShowDepositModal(false);
          }}
        ></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

        <div
          className="inline-block align-bottom rounded-lg 
          text-left overflow-hidden shadow-xl transform 
          transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full "
        >
          <div
            className={"bg-generatedNameBackground-500 h-12 flex justify-end"}
            onClick={() => {
              setShowDepositModal(false);
            }}
          >
            <div
              className={
                "h-full w-10 flex flex-end justify-center items-center cursor-pointer "
              }
            >
              <Close width={16} height={16} />
            </div>
          </div>
          <div className="bg-royalBlueColumn-500 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="w-full mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-white">
                  Add Liquidity
                </h3>
                <p className="text-sm text-gray-500">
                  Add liquidity to be eligable for rewards
                </p>
                <div className="mt-2">
                  <div className={"bg-royalDarkLightBlue rounded-2xl w-full "}>
                    <div className="p-4 pb-0 flex text-sm text-white justify-between">
                      <p>input</p>
                      <p>balance: {balance}</p>
                    </div>
                    <div className="p-4 flex text-sm text-white justify-between">
                      <input
                        className={"bg-royalDarkLightBlue"}
                        type="number"
                        placeholder="0.000000000000000000"
                        value={inputTop}
                        onChange={inputTopChangeHandler}
                      />
                      <div className={"flex "}>
                        <button className={"text-maxBlue pr-4"}>MAX</button>
                        <button className={"flex items-center gap-2"}>
                          <Information />
                          <p>Royal</p>
                          <Caret />
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-white text-center">+</p>

                  <div className={"bg-royalDarkLightBlue rounded-2xl  w-full "}>
                    <div className="p-4 pb-0 flex text-sm text-white justify-between">
                      <p>input</p>
                      <p>balance: {balance}</p>
                    </div>
                    <div className="p-4 flex text-sm text-white justify-between">
                      <input
                        className={"bg-royalDarkLightBlue"}
                        type="number"
                        placeholder="0.000000000000000000"
                        value={inputBottom}
                        onChange={inputBottomChangeHandeler}
                      />
                      <div className={"flex "}>
                        <button className={"text-maxBlue pr-4"}>MAX</button>
                        <button className={"flex items-center gap-2"}>
                          <BNB width={20} height={20} />
                          <p>BNB</p>
                          <Caret />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={"flex  items-center pt-2 pb-2 gap-2"}>
                    <p className="text-sm text-gray-500">
                      Prices and pool share
                    </p>
                    <InformationGray />
                  </div>

                  <div
                    className={"rounded-2xl h-20 w-full border border-gray-500"}
                  >
                    <div
                      className={
                        "flex items-center justify-evenly text-white text-center h-full "
                      }
                    >
                      <div className={"flex flex-col"}>
                        <p>5 GROY</p>
                        <p className={"text-xs"}>ESTIMATED PER ROUND</p>
                      </div>
                      <div
                        className={
                          "flex items-center border-l border-r border-gray-500 pl-10 pr-10 h-full"
                        }
                      >
                        <div className={"flex flex-col"}>
                          <p>5%</p>
                          <p className={"text-xs"}>STALKERS</p>
                        </div>
                      </div>
                      <div className={"flex flex-col"}>
                        <p>5% </p>
                        <p className={"text-xs"}> SHARE OF POOL</p>
                      </div>
                    </div>
                  </div>
                  <button
                    className={" lq-btn btn-royal-blue w-full mt-4"}
                    onClick={() => {
                      setShowDepositModal(false);
                    }}
                  >
                    Deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WithdrawModal = ({ balance, setShowWithdrawModal }) => {
  const [input, setInput] = useState("");
  const [withdrawPercent, setWithdrawPercent] = useState(89);

  const circle = useRef(null);

  // ref must use a callback
  const setCircleRef = useCallback(node => {
    if (circle.current) {
      // Make sure to cleanup any events/references added to the last instance
      console.log("circle.current", circle.current);
    }

    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
      console.log("node:", node);
      circle.current = node;
      const radius = node.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      console.log("circm", circumference);
      circle.current.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.current.style.strokeDashoffset = circumference;

      const offset = circumference - (withdrawPercent / 100) * circumference;
      circle.current.style.strokeDashoffset = offset;
    }

    // circle.current = node
    console.log("circle.current", circle.current.r);
  }, []);

  const inputChangeHandeler = e => {
    console.log("input : ", e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          onClick={() => {
            setShowWithdrawModal(false);
          }}
        ></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

        <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div
            className={"bg-generatedNameBackground-500 h-12 flex justify-end"}
            onClick={() => {
              setShowWithdrawModal(false);
            }}
          >
            <div
              className={
                "h-full w-10 flex flex-end justify-center items-center cursor-pointer"
              }
            >
              <Close width={16} height={16} />
            </div>
          </div>
          <div className="bg-royalBlueColumn-500 px-4 pt-5 pb-4 ">
            <div className="sm:flex sm:items-start">
              <div className="w-full mt-3 text-center sm:mt-0  sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-white">
                  Withdraw Liquidity
                </h3>

                <div
                  className={
                    "bg-royalDarkLightBlue rounded-2xl w-full mt-6 mb-6"
                  }
                >
                  <div className="p-4 pb-0 flex text-sm text-white justify-between">
                    <p>Withdrawl amount</p>
                    <p>balance: {balance}</p>
                  </div>
                  <div className="p-4 flex text-sm text-white justify-between">
                    <input
                      className={"bg-royalDarkLightBlue"}
                      type="number"
                      placeholder="0.000000000000000000"
                      value={input}
                      onChange={inputChangeHandeler}
                    />
                    <div className={"flex "}>
                      <button className={"text-btnRoyalRed-500 pr-4"}>
                        MAX
                      </button>
                      <button className={"flex items-center gap-2"}>
                        <Information />
                        <p>Roy</p>
                      </button>
                    </div>
                  </div>
                </div>

                {/* start */}
                <div className={"flex flex-col sm:flex-row mb-3 sm:mb-4 gap-4"}>
                  {/* first */}
                  <div className={"w-full h-22 "}>
                    <div
                      className={
                        "flex flex-row w-full pb-2 border-b border-gray-500 items-center"
                      }
                    >
                      <p className={"text-btnRoyalRed-500 text-xs pl-2"}>
                        WARNING
                      </p>
                    </div>
                    <div
                      className={
                        "flex flex-row w-full p-2 border-b border-gray-500 justify-between items-center "
                      }
                    >
                      <p className={"text-btnRoyalRed-500 text-xs"}>
                        Total reflection
                      </p>
                      <p className={"text-btnRoyalRed-500 text-xs"}>5 GROY</p>
                    </div>
                    <div
                      className={
                        "flex flex-row w-full p-2 border-b border-gray-500 justify-between items-center "
                      }
                    >
                      <p className={"text-dashboardGreen text-xs opacity-50"}>
                        Discounted Reflection (2021/04/12)
                      </p>
                      <p className={"text-dashboardGreen text-xs"}>2 GROY</p>
                    </div>
                    <div
                      className={
                        "flex flex-row w-full p-2 border-b border-gray-500 justify-between items-center "
                      }
                    >
                      <p className={"text-btnRoyalRed-500 text-xs"}>
                        Missed GROY Opportunity
                      </p>
                      <p className={"text-btnRoyalRed-500 text-xs"}>84 GROY</p>
                    </div>
                    <div
                      className={
                        "flex flex-row w-full p-2  border-b border-gray-500 justify-between items-center "
                      }
                    >
                      <p className={"text-btnRoyalRed-500 text-xs"}>
                        Total GROY Opportunity
                      </p>
                      <p className={"text-btnRoyalRed-500 text-xs"}>284 GROY</p>
                    </div>
                  </div>

                  {/* split */}
                  <div
                    className={"flex h-22 w-full justify-center items-center"}
                  >
                    <svg className="progress-ring" width="120" height="120">
                      <circle
                        stroke="#1a3349"
                        strokeWidth="8"
                        fill="transparent"
                        r="52"
                        cx="60"
                        cy="60"
                      />
                      <circle
                        className="progress-ring__circle"
                        ref={setCircleRef}
                        stroke="#FF6978"
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="transparent"
                        r="52"
                        cx="60"
                        cy="60"
                      />
                    </svg>
                    <div
                      className={
                        "flex flex-col w-15 justify-center items-center absolute  text-white"
                      }
                    >
                      <p className={"text-2xl font-semibold"}>
                        {withdrawPercent}%
                      </p>
                      <p className={"text-xxs"}>to next rank</p>
                    </div>
                  </div>
                </div>
                <button
                  className={"lq-btn btn-royal-red w-full"}
                  onClick={() => {
                    setShowWithdrawModal(false);
                  }}
                >
                  Withdraw Taxed GROY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
