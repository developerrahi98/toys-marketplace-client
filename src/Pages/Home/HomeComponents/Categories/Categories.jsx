import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';

const Categories = () => {
  const [activeTab , setActiveTab] = useState("suv")
  const handleActiveTab =(tabName)=>{
    setActiveTab(tabName)
  }
  return (
    <div className="my-6">
     <h2 className='text-6xl text-center text-violet-800 font-bold my-4'>Car Categories</h2>
     <div className='flex justify-center'>
       <div onClick={()=>handleActiveTab("suv")} className={
        `bg-violet-100 text-black p-6 border font-bold ${activeTab == "suv" ? "bg-violet-600" : ""}`
       }>SUV Car</div>
       <div onClick={()=>handleActiveTab("race")} className={
        `bg-violet-100 text-black p-6 border font-bold ${activeTab == "race" ? "bg-violet-600" : ""}`
       }>Racing Car</div>
       <div onClick={()=>handleActiveTab("formula")} className={
        `bg-violet-100 text-black p-6 border font-bold ${activeTab == "formula" ? "bg-violet-600" : ""}`
       }>Formula Car</div>
     </div>
    </div>
  );
};

export default Categories;
