import { useLocation, useNavigate } from "react-router-dom";
import "./Thanks.css";

const Thanks = () => {
    const location = useLocation();
    const email = location.state?.email;
    const navigate = useNavigate()
    const dismissForm = ()=>{
       navigate("/newsletter")
    }
  return (
    <>
    <div className="Subscribing-form fw-bold d-flex justify-content-ceneter flex-column">
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 64 64"><defs><linearGradient id="gradient-thanks" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#gradient-thanks)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
     <h2>Thanks for Subscribing!</h2>
     <p>A conformation email has been sent to <span className="fw-bold">{email}</span> Please open it and click the button inside it to confirm your subscription</p>
     <button className="button" onClick={dismissForm}>
        Dismiss message
     </button>
    </div>
    </>
  )
}

export default Thanks
