import React from "react";

let size;

const Leaderboards = ({
  leaderBoardsUsers,
  showMoreButton,
  showMoreAmount,
  setShowMoreAmount,
  switchedSmall
}) => {
  if (switchedSmall) {
    size = 5;
  } else {
    size = 20;
  }

  if (showMoreAmount) {
    size = 20;
  }

  return (
    <>
      <div className="grid sm:grid-flow-row sm:auto-rows-max md:grid-rows-10 md:grid-flow-col gap-x-6 gap-y-4 ">
        {/* generate users */}
        {leaderBoardsUsers.slice(0, size).map(index => (
          <div
            key={`leaderboard-${index}`}
            className={"bg-royalBlueColumn-500 rounded-lg text-white pl-2 pr-2"}
          >
            <div className="h-10 flex justify-between ">
              <div className={"flex flex-row gap-2"}>
                <div className="center">
                  <p>#{index < 10 ? `0${index}` : index}</p>
                </div>
                <div className="center">
                  <p>|</p>
                </div>
                <div className="center">
                  <p>123456789012 ROY&nbsp;</p>
                </div>
              </div>
              <div className="center">
                <p className={"text-leaderBoardName-500"}>Shanky Shark</p>
              </div>
            </div>
          </div>
        ))}
        {/* display button */}
        {showMoreButton && (
          <button
            className={"lq-btn btn-royal-red w-full "}
            onClick={() => {
              setShowMoreAmount(!showMoreAmount);
            }}
          >
            {!showMoreAmount ? "show more" : "show less"}
          </button>
        )}
      </div>
    </>
  );
};
const Center = ({ children }) => (
  <div className={"mt-auto mb-auto"}>{children}</div>
);

export default Leaderboards;
