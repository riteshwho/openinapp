import { useNavigate } from "react-router-dom";
import './Dashboard.css';
import {FiPieChart,FiUsers, FiSettings} from "react-icons/fi"
import {AiOutlineSchedule, AiOutlineLike} from "react-icons/ai"
import {GrNotification} from "react-icons/gr"
import {CiMoneyBill} from "react-icons/ci"
import {BiMoneyWithdraw} from "react-icons/bi"
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Schedule from "./schedule";
import { useEffect, useState } from "react";
import axios from "axios";



const Dashboard = () => {


   const [myData,setMyData] = useState([]);
    

    useEffect(()=>{
    axios.get("https://line-chart.onrender.com/user1").then((res)=> setMyData(res.data))
    },[]);


   const navigate = useNavigate(); 
  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
    <div className="container">
      <div className="sidebar">
        <h1 className="heading">Board.</h1>
       
        <ul className="list">
            <li className="active"><div className="list-icons"><FiPieChart/></div> Dashboard</li>
            <li><div className="list-icons"><BiMoneyWithdraw/></div>Transactions</li>
            <li><div className="list-icons"><AiOutlineSchedule/></div>Schedule</li>
            <li><div className="list-icons"><FiUsers/></div>Users</li> 
            <li><div className="list-icons"><FiSettings/></div>Settings</li>
        </ul>
        <ul className="list" style={{marginTop: '400px'}}>
            <li>Help</li>
            <li>Contact Us</li>
            <li><button onClick={logout}>Logout</button></li>
        </ul>
      </div>
      <div className="blocks">
      <div className="top-head">Dashboard <input placeholder="Search..." /><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg><div className="notification"><GrNotification/> </div> <div className="profile"><img src={localStorage.getItem("profilePic")} /></div></div>
            <div className="cards">
            {/* dynamic data fetching */}
                <div className="one"> <span className="icons"><BiMoneyWithdraw/></span>
                <div className="card-name">Total Revenues </div> 
                <div className="card-value">$ {myData.revenue}</div></div> 
                <div className="two"><span className="icons"><CiMoneyBill/></span>
                <div className="card-name">Total Transactions </div> 
                <div className="card-value">{myData.transaction}</div></div>
                <div className="three"><span className="icons"><AiOutlineLike/></span>
                <div className="card-name">Total Likes </div> 
                <div className="card-value">{myData.likes}</div></div>
                <div className="four"><span className="icons"><FiUsers/></span>
                <div className="card-name">Total Users </div> 
                <div className="card-value">{myData.users}</div>
                </div>
                
            </div>
            
           <div><LineChart data1 = {myData.data1}
           data2 = {myData.data2}/></div> 

           <div className="pie" style={{display : 'flex' , padding: '10px'}}>
            <div style={{paddingLeft: '50px'}}> <PieChart tees={myData.tees}
             pant = {myData.pant} 
             hoodies={myData.hoodies}
             /></div> 
            <div style={{paddingLeft: '220px', marginTop: '40px'}}> <Schedule/></div>
            </div>
            </div>
            
           
    </div>

     

 
    </>
  );
};


export default Dashboard;
 
