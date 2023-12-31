'use client'

import styles from "@/app/contact/contact.module.css"
import { Andika } from "next/font/google"
import { useState } from "react"
const andika = Andika({
    weight: ['400','700'],
    subsets: ['latin'],
    display: 'swap',
  })
 
  function ContactForm() {
    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        message:""
    })
    const [status, setStatus] = useState(null);
  function handleChange(e){
    const title=e.target.name;
    const value=e.target.value;
    setUser((prevUser)=>({...prevUser,[title]:value}));
  }
  async function handleSubmit(e){
    e.preventDefault();
    try{
        const response = await fetch('/api/contact', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:user.message
            })
        })
        // Set the status based on the response from the API route
        if (response.status === 200) {
            setUser({
                username: "",
                email: "",
                phone: "",
                message: ""
            })
            setStatus('success');
        } else {
            setStatus('error');
        }
    }catch(e){
console.log(e);
    }
  }
  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
<label htmlFor="username" className={styles.label}>
Enter Your Name
    <input type="text" name="username" id="" placeholder="Enter Your Name" className={andika.className} value={user.username} onChange={handleChange} autoComplete="off" required>

    </input>
</label>
      </div>
      <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" name="email" id="email"
                           placeholder="Enter your email"
                           className={andika.className}
                           value={user.email} 
                           onChange={handleChange}
                           autoComplete="off"
                           required
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input type="number" name="phone" id="phone"
                           placeholder="Enter your phone"
                           className={andika.className}
                           value={user.phone} 
                           onChange={handleChange}
                           autoComplete="off"
                           required
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea  name="message" id="message" rows={5}
                           placeholder="Enter your Message"
                           className={andika.className}
                           value={user.message } 
                           onChange={handleChange}
                           autoComplete="off"
                           required
                    />
                </label>
            </div>
            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                <button type="submit" className={andika.className}>Send Message</button>
            </div>
    </form>
  )
}

export default ContactForm
