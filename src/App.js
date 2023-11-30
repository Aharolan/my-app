import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Backgroundd from "./components/backgroundd";

const App = () => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  return (
    <Backgroundd>
      <Wrapper>
        <Screen value={calc.num ? calc.num : calc.res} />
        <ButtonBox calc={calc} setClc={setCalc}>
          
        </ButtonBox>
      </Wrapper>
    </Backgroundd>
  );
};

export default App;
