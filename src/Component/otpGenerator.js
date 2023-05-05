import "./otpGenerator.css";
import axios from "axios";
import { useState } from "react";


export function OtpGenerator(){


  const [mobileNumber, setMobileNumber] = useState();
  const ApiUrl = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP";

  function handleClick() {

    if (!(/[6789]\d{9}$/.test(mobileNumber))) {
      alert("Please enter correct mobile number")
    }
    axios({
        method: 'post',
        url: ApiUrl,
        data: {
            mobile: mobileNumber
        }
    })


    .then(Response => Response)
    .catch(error => error)


  }

  function handleInput(e) {
    setMobileNumber(e.target.value);
    console.log(mobileNumber)
  }

  return (
    <div className="container">
      <input onChange={handleInput} placeholder="mobile" />
      <button onClick={handleClick}>Get OTP</button>
    </div>
  )
  }
