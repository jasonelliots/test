import React, { useState, useEffect } from "react";
import PlantList from "./PlantList";
import AddPlant from "./AddPlant";
import { StyledDashboard, SubTitle, LeftDash, RightDash } from "../styledComponents";

const Dashboard = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <StyledDashboard>
      <LeftDash>
       
        <AddPlant setRefresh={setRefresh} />
      </LeftDash>
      <RightDash>
        <SubTitle>Your plant friends:</SubTitle>
        <PlantList setRefresh={setRefresh} refresh={refresh} />
      </RightDash>
    </StyledDashboard>
  );
};

export default Dashboard;
