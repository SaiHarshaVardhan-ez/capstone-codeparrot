import React from "react";
import FinishesList from "../components/modificationComponents/FinishesList";
import Header from "../common/Header";
import Display from "../components/modificationComponents/Display";
import Options from "../components/modificationComponents/Options";

const Modification = ({ selectedProgress }) => {
  return (
    <>
      <Header />
      <div className="flex gap-10 px-6 p-4">
        <FinishesList selectedProgress={selectedProgress}/> 
        <Display selectedProgress={selectedProgress}/> 
        <Options selectedProgress={selectedProgress}/> 
      </div>
    </>
  );
};

export default Modification;
