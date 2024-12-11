import { useState } from "react"
import newsletterImage from "../../assets/images/illustration-sign-up-desktop.svg"
import "./Newsletter.css"
import {useNavigate} from "react-router-dom";
import Thanks from "../ThanksForSubscribing/Thanks";


const Newsletter = () => {
  const [email,setEmail] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();
  const matchingEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email);
  }
  const handleChange = (e)=>{
   e.preventDefault()
   if(matchingEmail(email)){
    setError("");
    navigate("/thankYou",{ state: { email } });
   
   }else{
    setError("valid email required");
    setEmail("ash#loremcompany.com")
   }
  }
  return (
    <>
    
     <div className="newsletterForm">
       <div className="formSubmit ms-4">
        <h1 className="fw-bold fs-1">Stay updated!</h1>
        <p className="newsletter Updates">Join 60000+ product managers receiving monthly updates on</p>
         <div className="deleviry manger">
            <div className="first deleviry mb-2">
         <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
         <p className="deliveries">product discovery and building what matters</p>
         </div>
         <div className="second deleviry  mb-2">
         <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
         <p className="deliveries">Measuring to ensure updates are succesfull</p>
         </div>
         <div className="third deleviry  mb-2">
         <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
         <p className="deliveries">Add much more!</p>
         </div>
         </div>
         <form>
          <label htmlFor='email-address'>Email Address</label>
          {error && <p className="error mb-0 ms-2">{error}</p>}
            <input type="email" id="email-address" onChange={(e) => setEmail(e.target.value)}/> 
            <button type="submit" onClick={handleChange}>
                Subscribe to monthly members
            </button>
         </form>
       </div>
       <div className="newsletter-img">
        <img src={newsletterImage} alt="Newsletter illustration"></img>
       </div>
     </div>
    </>
  )
}

export default Newsletter
