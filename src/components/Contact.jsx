import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })


  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value}) 
  }

  const validateForm = () => {
    let isValid = true; 
    const errors = {};

    if(!form.name.trim()) {
      errors.name = 'Name is required'
      isValid = false 
    }

    if(!form.email.trim()) {
      errors.email = 'Email is required'
      isValid = false 
    } else if(!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'Email is invalid'
      isValid = false 
    }

    if (!form.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateForm()) {
      setLoading(true);

        emailjs.send('service_afs51iv', 'template_bd9dpbc', 
      {
        from_name: form.name,
        to_name: 'Rob',
        from_email: form.email, 
        to_email: 'robert.tyler.mccary@gmail.com',
        message: form.message 
      },
      'QKK4boBjPoN1vfF-j'
      ).then(() => {
        setLoading(false);
        alert('Thank you, I will get back to you soon');
        setForm({name: '', email: '', message:''})
      }, (error) => {
        console.log(error)
        
        alert('Something went wrong. Apologies for the inconvenience')
      })
    } else {
      alert('Validation failed, please correct submission')
    }
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col"><span className="text-white font-medium mb-4">Your Name</span>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
          </label>
          {formErrors.name && <span className="text-red-500">{formErrors.name}</span>}
          <label className="flex flex-col"><span className="text-white font-medium mb-4">Your Email</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
          </label>
          {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
          <label className="flex flex-col"><span className="text-white font-medium mb-4">Your Message</span>
          <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
          </label>
          {formErrors.message && <span className="text-red-500">{formErrors.message}</span>}
          <button type="submit" disabled={loading} className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">{loading ? 'Sending...' : 'Send'}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")