import React, {useEffect, useState} from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

export default function PlantList() {
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
            // .finally(setRefresh(false));
    }, []);
    return (
        <div>
            <p>plant list</p>
            {/* map through plants - rendering plant component for each */}
            {plantList.map((plant) => {
                return (
                   <p>{plant.nickname}</p>
                )
            })}
        </div>
    )
}
