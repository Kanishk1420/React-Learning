import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../features/searchSlice";
const Tabs = () => {
  const tabs = ["Photos", "Videos", "Gifs"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab); // fetched activetab value from the search slice of the store
  return (
    <div className="flex gap-10 p-10 justify-center">
      {tabs.map(function (elem, idx) {
        return <button className={`${(activeTab==elem?'bg-blue-600':'bg-gray-700')} transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`} key={idx} onClick={()=>{
          dispatch(setActiveTab(elem))
        }}>{elem}</button>;
      })}
    </div>
  );
};

export default Tabs;
