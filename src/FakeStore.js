import React from 'react'

function FakeStore() {

    



    return (
        <div>
        <div className="title">
            <h2>Title with underline</h2>
            <div className="title-underline"></div>
        </div>
            <h1>My e-commerce</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dolorum quisquam animi odio at reprehxnderit magni mollitia neque labore dolorem. Nihil blanditiis eius harum itaque quod! Iusto sequi ea quia.</p>
            <h2>Listing Items</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dolorum quisquam animi odio at reprehxnderit magni mollitia neque labore dolorem. Nihil blanditiis eius harum itaque quod! Iusto sequi ea quia.</p>
            <h3>Contact me</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dolorum quisquam animi odio at reprehxnderit magni mollitia neque labore dolorem. Nihil blanditiis eius harum itaque quod! Iusto sequi ea quia.</p>
            <a href="#">Click here.</a>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About us</li>
                <li>Profile</li>
            </ul>
            <button className="btn" type="button">Add to Cart</button>
            <button className="btn btn-hipster" type="button">Remove</button>

            <div className="container">
                <img src="../image.jpeg" className="img" alt="" />
            </div>

            <div className="alert alert-danger">failed to connect to server !</div>
            <div className="alert alert-success">succesfully added item to cart.</div>

            <form className="form">
                <h4>Contact me.</h4>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" placeholder="Enter name" id="name" className="form-input" />
                </div>
                <div className="form-row">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text"  id="address" className="form-input" />
                </div>
                <div className="form-row">
                    <label htmlFor="phone" className="form-label">Phone no.</label>
                    <input type="number"  id="phone" className="form-input" />
                </div>
                <div className="form-row">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email"  id="email" className="form-input" />
                </div>
                <div className="form-row">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"  id="password" className="form-input" />
                    <small className="form-alert">Password didn't match</small>
                </div>
                <div className="form-row">
                    <label htmlFor="textarea" className="form-label">Textarea</label>
                    <textarea className="form-textarea" id="textarea" ></textarea>
                </div>
                <button className="btn btn-block">Submit</button>
            </form>

            <div className="loading"></div>

        </div>
    )
}

export default FakeStore
