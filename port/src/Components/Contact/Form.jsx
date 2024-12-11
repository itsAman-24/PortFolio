import { useState } from "react";
import "./Form.css";
import arrow_icon from "../../assets/arrow_icon.svg";

const Form = () => {

  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "decf7f9e-6967-4c31-8078-12015299eb10");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>Your name</label>
        <input type="text" name="name" placeholder="Enter your name" required />
        <label>Your Email</label>
        <input
          type="email"
          name="phone"
          placeholder="Enter your email"
          required
        />
        <label>Write your message here</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
        ></textarea>
        <button type="submit" className="btn dark-btn">
          Submit now   <img src={arrow_icon} alt="" />
        </button>
      </form>
      <span>{result}</span>
    </>
  )
};

export default Form;
