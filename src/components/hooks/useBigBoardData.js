import { useState, useEffect } from "react";
import getTicTacToeStatus from "../utils/getTicTacToeStatus";
import emptySmallBoardData from "../utils/emptySmallBoardData";

const emptyBigBoardData = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
};

const useBigBoardData = (lastMove, smallBoardData) => {
  const [bigBoardData, setBigBoardData] = useState(emptyBigBoardData);

  useEffect(() => {
    const bigBoardPosition = lastMove.bigBoardPosition;
    if (bigBoardPosition === null || bigBoardPosition === undefined) return;
    
    const ticTacToeStatus = getTicTacToeStatus(smallBoardData[bigBoardPosition]);
    setBigBoardData((prevBigBoardData) => ({
      ...prevBigBoardData,
      [bigBoardPosition]: ticTacToeStatus,
    }));
  }, [lastMove, smallBoardData]);

  useEffect(() => {
    if (smallBoardData === emptySmallBoardData) setBigBoardData(emptyBigBoardData);
  }, [smallBoardData]);

  return bigBoardData;
};

export default useBigBoardData;
