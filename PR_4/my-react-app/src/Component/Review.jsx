import { useState } from "react";
import './Review.css';

const Review = () => {
    const User = {
        userName: "",
        email: "",
        rating: "",
        description: ""
    };

    const [input, setInput] = useState(User);
    const [reviews, setReviews] = useState([]);
    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    };

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!input.userName.trim()) {
            formErrors.userName = "Username is required";
            isValid = false;
        }

        if (!input.email.trim()) {
            formErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
            formErrors.email = "Enter a valid email address";
            isValid = false;
        }

        if (!input.rating) {
            formErrors.rating = "Please select a rating";
            isValid = false;
        }

        if (!input.description.trim()) {
            formErrors.description = "Description cannot be empty";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setReviews([...reviews, input]);
        setInput(User);
        setErrors({});
    };

    return (
        <div className="user_review">
            <h2>User Review</h2>
            <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="input-field">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="userName"
                        value={input.userName}
                        onChange={handleInput}
                    />
                    {errors.userName && <span className="error">{errors.userName}</span>}
                </div>

                {/* Email */}
                <div className="input-field">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={handleInput}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                {/* Rating */}
                <div className="input-field star-rating">
                    <label>Rating:</label>
                    <div className="stars">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <span
                                key={num}
                                className={`star ${num <= input.rating ? 'filled' : ''}`}
                                onClick={() => setInput({ ...input, rating: num.toString() })}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    {errors.rating && <span className="error">{errors.rating}</span>}
                </div>

                {/* Description */}
                <div className="input-field">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={input.description}
                        onChange={handleInput}
                    />
                    {errors.description && <span className="error">{errors.description}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>
            <hr />

            <div className="review-list">
                <h3>Submitted Reviews:</h3>
                {reviews.map((rev, index) => (
                    <div key={index} className="review-card">
                        <h4>{rev.userName} ({rev.email})</h4>
                        <p>{'★'.repeat(rev.rating)}</p>
                        <p>{rev.description}</p>
                        <div className="review-date">
                            {new Date().toLocaleDateString()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
