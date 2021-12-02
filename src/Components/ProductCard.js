import React from 'react';
import { useHistory } from 'react-router';

const ProductCard = (props) => {
    const {  name, price } = props.product;
    const history = useHistory();
    const handelClick = (id) => {
        const url = `/productDetails/${name}`;
        history.push(url);
    }

    return (
        <div className="col-4" style={{ minHeight: "70vh" }}>
            
            <div className="card-group">
                <div className="card-header">
                    <img src="https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHw%3D&w=1000&q=80" height="300" width="200" alt="" className="card-img-top" />
                    <div class="card-body">
                        <div class="d-flex">
                            <h5 class="card-title text-success">{name}</h5>
                            <p class="card-text ms-auto"><small class="text-danger fw-bold">Price:
                                {price}</small></p>
                        </div>
                        <span></span>
                        <div class="d-flex">
                        </div>
                        <div class="d-flex">
                            <div class="ms-auto">
                                <button className="btn btn-sm btn-success mt-4" onClick={() => handelClick(name)}>Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
};

export default ProductCard;