import React, { useState } from "react"
import AddProductNavBar from './AddProductNavBar';
import '../App.css'
import './AddProductNavBar.css'
import './AddEdit.css'
import './HomeNavBar.css'
import AdminNavBar from "./AdminNavBar";



export default function AddProduct() {

    const clearData = () => {
        window.location.reload(false);
    };



    return (
    

        <div className="body22">
            <AdminNavBar/>
            <AddProductNavBar />
            
            <br></br>
            <br></br>

            <div className="containersss">
                <form action="http://localhost:5000/product/add" method="post" class="form img " encType="multipart/form-data">

                    <h5>Add Bus Shedule</h5>
                    <br />

                    <br />

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">Root No.</label>
                        <input type="number" name="productName" className="form-control input-field" id="inserProduct" placeholder="Enter root number" required
                        />
                    </div>

                    <br />

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">Bus Number</label>
                        <input type="text" name="bNo" className="form-control input-field" id="inserProduct" placeholder="Enter bus number" required
                        />
                    </div>

                    <br/>

                    <div className="col-md-7 element">
                        <label className="form-label1" for="categorySelect">Bus Category</label>
                        <select name="category" className="form-select" id="categorySelect"
                        >
                            <option>Choose...</option>
                            <option>HighWay Express Bus</option>
                            <option>Private Bus</option>
                            <option>SLTB</option>
                        </select>
                    </div>

                    <br />

                    <div className="col-md-3 element" style={{ display: 'block' }}>
                        <label for="datePicker" className="form-label1">Received Date</label>
                        <input id="date" name="date" label="Choose Received Date" type="Date" InputLabelProps={{ shrink: true, }} required
                        />
                    </div>
                    <br />
                    <table className="element">
                        <tr>
                            <td>
                                <div className="col-md-10">
                                    <label for="inputQuant" className="form-label1">Bus Quantity</label>
                                    <input name="quantity" type="number" className="form-control" id="inputQuant" placeholder="Enter bus quantity"
                                    />
                                </div>
                            </td>
                        </tr>
                    </table>

                    <br />

                    <div className="col-md-5 element">
                        <label for="inputQuant" className="form-label1">Price(LKR.)</label>
                        <input name="price" type="number" className="form-control" id="inputQuant" placeholder="Enter unit price"
                        />
                    </div>

                    <br />

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">Time Schedule</label>
                        <input type="text" name="size" className="form-control input-field" id="inserProduct" placeholder="Enter time shedule" required
                        />
                    </div>

                    <br/>


                    <div className="element">
                        <label for="actual-btn" className="form-label1">Upload Product Image</label>
                        <input type="file" id="actual-btn" name="image" className="upload textcolor" required
                        />
                    </div>

                    <br />

                    <button type="submit" className="btn Addbtn">Add Product</button>
                    <buttons type="clear" className="btn Addbtn1" onClick={clearData}>Clear</buttons>

                    <br />

                </form>
            </div>
        </div>



    )
}