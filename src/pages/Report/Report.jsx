import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../App";
import axios from "axios";
import bootstrap from "bootstrap";
import StaticComponents from "../../components/StaticComponents";
import BasicTable from "../../components/BasicTable";
import catdata from '../../categoryTableData.json';
import './category.scss';

function Category() {
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState();
    const [categoryDescription, setCategoryDescription] = useState();
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
        setErrorMsg("");
        e.preventDefault();
        try {
            const response = await axios.post(BACKEND_URL + '/api/category',{categoryName, categoryDescription});
            console.log(response);
            if(response?.data?.token && response?.data?._id){
                console.log(response?.data?.token, response?.data?._id);
                navigate("/dashboard");
            }
        } catch (error) {
            setErrorMsg("Invalid Username or Password!");
            console.log(error);
        }

        // Verify Token Later
        // axios.get(USERS_API_URL + '/loggedin')
        // .then(result => console.log(result))
        // .catch(err => console.log(err));
    };

    // const data = useMemo(() => movies, [])
    const data = useMemo(() => catdata, [])

    /** @type import('@tanstack/react-table').ColumnDef<any> */
    const categoryColumns = [
        {
          header: 'Code',
          accessorKey: 'code',
        },
        {
          header: 'Category',
          accessorKey: 'category',
        },
        {
          header: 'Description',
          accessorKey: 'description',
        },
        {
            header: 'Edit',
            accessorKey: '',
          },
      ]


    return (
        <div className="category" id="category">

            <StaticComponents />

            
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <strong>Create a Category</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">


                    <div className="bg-white p-3 rounded w-50 addEditForm">
                        <h2>Add Category</h2>
                        {errorMsg}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name">
                                    <strong>Category Name</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Category Name"
                                    name="categoryName"
                                    className="form-control rounded-0"
                                    onChange={(e) => setCategoryName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="categoryDescription">
                                    <strong>Description</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Category Description"
                                    name="categoryDescription"
                                    className="form-control rounded-0"
                                    onChange={(e) => setCategoryDescription(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-success w-100 rounded-0">ADD</button>
                        </form>
                    </div>


                    </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center vh-100">
            <BasicTable data={data} columns={categoryColumns} />
            {/* <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">     */}
            
            {/* <div className="bg-white p-3 rounded w-25">
                <h2>Add Category</h2>
                {errorMsg}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Category Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Category Name"
                            name="categoryName"
                            className="form-control rounded-0"
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categoryDescription">
                            <strong>Description</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Category Description"
                            name="categoryDescription"
                            className="form-control rounded-0"
                            onChange={(e) => setCategoryDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">ADD</button>
                </form>
            </div> */}

            </div>
        </div>
    );
}
export default Category;