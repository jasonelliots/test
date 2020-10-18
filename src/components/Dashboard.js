import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import PlantList from "./PlantList";
import AddPlant from "./AddPlant"; 
import { StyledDashboard } from '../styledComponents';

const Dashboard = () => {
    const [taskList, setTaskList] = useState([]);
    const [refresh, setRefresh] = useState(true);
    useEffect(() => {
        axiosWithAuth()
            .get("/api/tasks")
            .then((res) => {
                console.log(res);
                setTaskList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(setRefresh(false));
    }, [refresh]);
    return (
        <StyledDashboard>
            <h2>Your Plant Friends:</h2>
                <AddPlant />
                <PlantList />
        </StyledDashboard>
    );
};

export default Dashboard;
