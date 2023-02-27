import React from "react";
import "./Contact.css";

const Contact = () => {
    const submitHandler = async (e) => {
        e.preventDefault();

        const details = {
            Name: e.target.name.value,
            Email: e.target.email.value,
            Phone: e.target.phone.value,
        };

        fetch(
            "https://create-http-request-default-rtdb.firebaseio.com/details.json",
            {
                method: "POST",
                body: JSON.stringify(details),
                headers: { "content-Type": "aplication/json" },
            }
        );

        e.target.name.value = "";
        e.target.email.value = "";
        e.target.phone.value = "";
    };

    return (
        <div className="row justify-content-evenly">
            <div className="col-7 mt-5">
                <h2 className="heading">Contact Us:-</h2>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="exampleInputname" className="form-label">
                            Name:
                        </label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">
                            Email address:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                        />
                    </div>
                    <label htmlFor="phone" className="form-label">
                        Phone:
                    </label>
                    <input type="tel" className="form-control" id="phone" required />
                    <button
                        type="submit"
                        id="submitbtn"
                        className="btn btn-outline-primary mt-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

