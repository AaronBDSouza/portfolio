import { useState } from "react";
import TopBar from "./topBar/TopBar";
import DashboardMenu from "./dashboardMenu/DashboardMenu";
import './staticComponents.scss';

export default function StaticComponents() {
const [menuOpen, setMenuOpen] = useState(false);

return(
    <div className="staticComponents" id="staticComponents">
        <TopBar menuOpen = { menuOpen } setMenuOpen = {setMenuOpen} isDashboard = {true}/>
        <DashboardMenu menuOpen = { menuOpen } setMenuOpen = {setMenuOpen} />
    </div>
);
}