// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import type { Player } from "../types/Player.type";

function Backend() {

    const [userList,setUserList] = useState<Player[]>([]);


    const getUserList = async () => {
      const response = await axios.get('http://localhost:3000/api/v1/user');
      setUserList(response.data);
      console.log(response.data);
      console.log(userList);
    }

    useEffect(() => {
      console.log("Successful-changes!!!")
    },[userList]);
  return (
    <>
    <div>Backend</div>
    <button
      onClick={getUserList}
      className="outline-2 bg-amber-500"
    >
      getUser
    </button>
    <div>
      {userList.map((player, idx) => (
    <div key={idx}>{player.playerName}</div>
  ))}
    </div>
    </>
  )
}

export default Backend;