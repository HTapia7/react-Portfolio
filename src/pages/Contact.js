import React from "react";

function Contact () {
    return  <div className="container mt-5"> 
                <h1>Contact Me!</h1>

                <form className="row g-3">
                    <div className="col-md-6"> 
                        <label for="firstName" className="form-label">First Name: </label>
                        <input type="text" className="form-control" id="firstName" required/>
                    </div>
                    <div className="col-md-6">
                        <label for="lastName" className="form-label">Last Name: </label>
                        <input type="text" className="form-control" id="lastName" required/>
                    </div>
                    <div className="col-md-8">
                        <label for="emailInfo" className="form-label">Email: </label>
                        <input type="email" className="form-control" id="emailInfo" required></input>
                    </div>
                    <div className="col-md-4">
                        <label for="phoneNumber" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="phoneNumber"></input>
                    </div>
                    <div className="col-md-12">
                        <label for="message" className="form-label">Ask a question</label>
                        <textarea className="form-control" id="message" rows="4"></textarea>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
}

export default Contact;