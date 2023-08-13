import './dashboard.scss';
import {FaEdit, FaCheckDouble, FaRegTrashAlt, FaFileInvoice, FaFileMedical, FaBoxes, FaListAlt, FaStore, FaDropbox, FaBuffer, FaBarcode, FaCogs, FaChartLine} from "react-icons/fa";
import { useState } from 'react';
import TopBar from '../topBar/TopBar';
import DashboardMenu from '../dashboardMenu/DashboardMenu';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Category from '../../pages/Category/Category';
import Product from '../../pages/Product/Product';

export default function Dashboard() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const navigateToPage = (pageName) => {
        switch(pageName) {
            case Category:
                navigate("/category");
              break;
              case Product:
                navigate("/product");
              break;
              case "Sales":
                navigate("/sales");
              break;
            default:
                navigate("/dashboard");
          }
    };

    return (
        <div className="dashboard" id="dashboard">
            {/* <Route path="/projectViewer" render={(props) => <ProjectViewer {...props}/>}/>*/}
            <TopBar menuOpen = { menuOpen } setMenuOpen = {setMenuOpen} isDashboard = {true}/>
            <DashboardMenu menuOpen = { menuOpen } setMenuOpen = {setMenuOpen} />
            <div className="section">
                <div className="item" style={{width:"200px", height:"200px"}}>
                    <FaFileMedical/>
                    <br/>    
                    <h3>Generate Bill</h3>
                </div> 
                <div className="item" style={{width:"200px", height:"200px"}}>
                    <FaFileInvoice color='blue'/>
                    <br/>    
                    <h3>Reports</h3>
                </div> 
                <div className="item" style={{width:"200px", height:"200px"}} onClick={() => navigateToPage(Product)}>
                    <FaBoxes color='rgb(219 140 82)'/>
                    <h3>Products</h3>
                </div> 

                <div className="item" style={{width:"200px", height:"200px"}} onClick={() => navigateToPage(Category)}>
                    <FaListAlt color='purple'/>
                    <h3>Categories</h3>
                </div>

                <div className="item" style={{width:"200px", height:"200px"}}>
                    <FaStore color='orange'/>
                    <h3>Store Value</h3>
                </div> 
                <div className="item" style={{width:"200px", height:"200px"}}>
                    <FaChartLine color='#cd2323'/>
                    <h3>Deductions</h3>
                </div> 
            </div>
            <div className="section">
                <div className="item graphItem" style={{width:"400px", height:"200px"}} onClick={() => navigateToPage("Sales")}>
                    <h3>Sales</h3>
                    <Sparklines data={[5, 10, 25,5, 20, 8,5,14,50,2]} limit={10} width={100} height={50} margin={5} marginBottom={0}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </div> 
                <div className="item" style={{width:"200px", height:"200px"}}>
                    <FaDropbox color='red'/>
                    <h3>Out of Stock</h3>
                </div> 
                <div className="item" style={{width:"200px", height:"200px"}}>
                    <FaBuffer color='#ffdc27'/>
                    <h3>Low Stock</h3>
                </div> 
                <div className="item" style={{width:"200px", height:"200px"}}>
                    <FaBarcode color='black'/>
                    <h3>Generate Barcode</h3>
                </div> 
                <div className="item" style={{width:"200px", height:"200px"}}>
                    <FaCogs color='grey'/>
                    <h3>Settings</h3>
                </div> 
            </div>
        </div>
    )
}
