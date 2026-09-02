import React from 'react'
import { toast } from 'react-toastify';
import {motion} from 'framer-motion'
import {Send} from 'lucide-react'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult("");
        toast.error(data.message)
        }
    };

  return (
    <motion.div
        initial={{opacity: 0, y: 100}}
        transition={{duration: 0.5}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className='w-full overflow-hidden p-6 py-20 lg:px-32' id='Contact'>
        <h1 className='text-2xl md:text-4xl text-center font-bold'>Contact <span className='font-light underline underline-offset-4 decoration-1 under'>Us</span></h1>
        <p className='text-gray-500 max-w-80 mx-auto mt-2 text-center mb-12'>Lets contact and build you future together</p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2'>
                    Name:
                    <input type="text" className='w-full py-3 px-4 border border-gray-300 mt-2 transition duration-200 focus:outline-none focus:border-blue-600' placeholder='Enter your name' name='Name' required />
                </div>
                <div className='w-full md:w-1/2 md:pl-2'>
                    Email:
                    <input type="email" className='w-full py-3 px-4 border border-gray-300 mt-2 transition duration-200 focus:outline-none focus:border-blue-600' placeholder='Enter your email' name='Email' required />
                </div>
            </div>
            <div className='my-4'>
                Message:
                <textarea className='border border-gray-300 w-full h-48 py-3 px-4 resize-none mt-2 transition duration-200 focus:outline-none focus:border-blue-600' name="message" id="" placeholder='Message' required></textarea>
            </div>
            <motion.button
                whileHover={{scale: 1.01}}
                whileTap={{scale: 0.95}}
                className='bg-blue-600 text-white py-2 px-8 cursor-pointer mb-10 hover:bg-blue-500 flex items-center gap-2'
            >
                {result ? result : "Send Message"}{!result && <Send size={18} />}
            </motion.button>
        </form>

    </motion.div>
  )
}

export default Contact