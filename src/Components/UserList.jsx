import React,{useEffect} from 'react';
import {fecthAllUsers} from "../store/slices/users";
import { useDispatch, useSelector } from "react-redux";

const UserList=()=>{

    //para obtener los daots del estado
    const {list}= useSelector((state)=>{
        console.log("1) use selector userList.js", state.users);
        return state.users
    });
    
    
    const dispatch=useDispatch();

    let lista="";
    useEffect(()=>{
        dispatch(fecthAllUsers());
    },[dispatch])


   
    lista=list.map((user, index)=>{
    
        return <div key={index} className="col-md-3">
            <div className="card">
                <img src={user.avatar} alt="avatar"/>
                <div className='card-body'>
                    <h5 className='card-title'>{`${user.name.firstname} ${user.name.lastname}`}</h5>
                    <p className='card-text'>{user.email} </p>
                </div>
            </div>    
        </div>
    });

  
    return (
        <div className='container'>
            <div className='row'>
                {lista}
            </div> 
        </div>
    )
}

export default UserList;