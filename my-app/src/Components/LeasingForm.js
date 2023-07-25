import React from 'react';
 
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk} from '@fortawesome/free-solid-svg-icons'

function LeasingForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    let emailForm  = () =>{
        console.log("form called")
    }
    return (
       <div >
           <form className='form' >
                <p className='leaseTitle'>Residential Leasing</p>
               <div className='formContainer'> 
                    <label className='labelFont'> First Name <FontAwesomeIcon color = "red" size = "xs" icon={faAsterisk} />
                        <input 
                        className='input'
                        type="text" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>
                
                    <label className='labelFont' > Last Name<FontAwesomeIcon color = "red" size = "xs" icon={faAsterisk} />
                        <input 
                        className='input'
                        type="text" 
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                        />
                    </label>
                </div>
                <div  className='formContainer'> 
                    <label className='labelFont' > Email Address<FontAwesomeIcon color = "red" size = "xs" icon={faAsterisk} />
                        <input 
                        className='input'
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                <label className='labelFont' > Phone Number<FontAwesomeIcon color = "red" size = "xs" icon={faAsterisk} />
                    <input 
                    className='input'
                    type="text" 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </label>
                </div>
                <div className='formContainer'> 
                <label className='labelFont' > Message<FontAwesomeIcon color = "red" size = "xs" icon={faAsterisk} />
                    <textarea 
                    className='messageFont'
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                
                </div>
                <input className = "submitButton" type="submit" onSubmit = {emailForm}/>
            </form>
            
       </div>
        
    );
}
 
export default LeasingForm;