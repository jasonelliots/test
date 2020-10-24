import React, {useEffect, useState} from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import {PlantListDiv, PlantDiv, Emoji} from "../styledComponents"; 

export default function PlantList({setRefresh, refresh}) {
    const userid = window.localStorage.getItem('userid');
    const [plantList, setPlantList] = useState([]);
    // axios request to grab plants 
     useEffect(() => {
        axiosWithAuth()
            .get(`/api/plants/user/${userid}`)
            .then((res) => {
                console.log(res);
                setPlantList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(setRefresh(false));
    }, [refresh]);
    return (
        <PlantListDiv>
      
            {/* map through plants - rendering plant component for each */}
            {plantList.map((plant, i) => {
                return (
                    <PlantDiv>
                   <p> {i%2 === 0 ? <Emoji>🌱</Emoji>:<span>🌿</span> }</p>
                   {/* <p>{plant.nickname}</p>
                   <p>{plant.species}</p>
                   <p>{plant.h2ofrequency}</p> */}
                   </PlantDiv>
                )
            })}
        </PlantListDiv>
    )
}
