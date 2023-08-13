import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import bootstrap from "bootstrap";
import { BACKEND_URL } from "../../App";
import axios from "axios";
import StaticComponents from "../../components/StaticComponents";
import BasicTable from "../../components/BasicTable";
import proddata from '../..//productTableData.json';
import Select from 'react-select';
import './product.scss';
import 'react-select-search/style.css';

function Product() {
    const navigate = useNavigate();
    const [productName, setProductName] = useState();
    const [productDescription, setProductDescription] = useState();
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
        setErrorMsg("");
        e.preventDefault();
        try {
            const response = await axios.post(BACKEND_URL + '/api/product',{productName, productDescription});
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
    const data = useMemo(() => proddata, []);
    const productColumns = [
        // {
        //     header: '',
        //     accessorKey: 'image',
        // },
        {
          header: 'Code',
          accessorKey: 'code',
        },
        {
          header: 'Product',
          accessorKey: 'name',
        },
        {
          header: 'Description',
          accessorKey: 'description',
        },
        {
            header: 'Category',
            accessorKey: 'category',
        },
        {
            header: 'Quantity',
            accessorKey: 'quantity',
        },
        {
            header: 'Price',
            accessorKey: 'price',
        },
        {
            header: 'In Stock',
            accessorKey: '',
        },
        {
            header: 'Sold',
            accessorKey: '',
        },
        {
            header: 'Edit',
            accessorKey: '',
        },
    ];

    const categoryOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla1', label: 'Vanilla1' },
        { value: 'vanilla2', label: 'Vanilla2' },
        { value: 'vanilla3', label: 'Vanilla3' },
        { value: 'vanilla3', label: 'Vanilla3' },
        { value: 'vanilla3', label: 'Vanilla3' },
        { value: 'vanilla3', label: 'Vanilla3' },
        { value: 'vanilla3', label: 'Vanilla3' },
        { value: 'vanilla3', label: 'Vanilla3' },
        { value: 'vanilla3', label: 'Vanilla3' },
        { value: 'vanilla3', label: 'Vanilla3' },
    ];


    return (
        <div className="product" id="product">

            <StaticComponents />
            {/* <SelectSearch options={categoryOptions} value="sv" name="language" placeholder="Choose your language" /> */}
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <strong>Create a Product</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">


                            <div className="bg-white p-3 rounded w-50 addEditForm">
                                <h2>Add Product</h2>
                                {errorMsg}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name">
                                            <strong>Product Name</strong>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Product Name"
                                            name="productName"
                                            className="form-control rounded-0"
                                            onChange={(e) => setProductName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="productCategory">
                                            <strong>Category</strong>
                                        </label>
                                        <div className="srchSelectBox">
                                            <Select options={categoryOptions} />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="productDescription">
                                            <strong>Description</strong>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Product Description"
                                            name="productDescription"
                                            className="form-control rounded-0"
                                            onChange={(e) => setProductDescription(e.target.value)}
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
            <BasicTable data={data} columns={productColumns} />
            </div>
        </div>
    );
}
export default Product;