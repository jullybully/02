import { ChangeEvent, useState } from "react";
import Button from "./Button";
import { RiErrorWarningLine } from 'react-icons/ri';
import { InputAdornment, TextField } from "./TextField";

const ContactForm = () => {
  const [emailData, setEmailData] = useState({ email: '', error: '' });
  const hasEmailError = emailData.error !== '';
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) {
      setEmailData({ email: e.target.value, error: '' })
    } else {
      setEmailData({ email: e.target.value, error: 'Whoops, make sure it\'s an email' })
    }
  }
  return (
    <form className="flex justify-center flex-col sm:flex-row gap-4">
      <div className="basis-[60%]">
        <TextField fullWidth
          tag="input"
          name="email"
          type="email"
          placeholder="Enter your email address"
          InputProps={{ endAdornment: <InputAdornment show={hasEmailError} className="text-xl text-soft-red font-bold"><RiErrorWarningLine /></InputAdornment> }}
          error={hasEmailError}
          value={emailData.email}
          helperText={emailData.error}
          onChange={handleEmailChange}
          classes={{ error: 'bg-soft-red text-white px-2 py-1 rounded-b-sm italic -mt-[5px]' }} autoComplete="off"></TextField>
      </div>
      <div className="sm:ml-4">
        <Button type="submit" themeColor="soft-red" className="w-full">Contact Us</Button>
      </div>
    </form>
  )
}
const Contact = () => {
  return (
    <section className="bg-soft-blue py-8">
      <div className="w-[90%] md:w-[60%] xl:w-[35%] mx-auto ">
        <p className="uppercase tracking-widest text-white text-xs text-center">35,000+ Already joined</p>
        <h2 className="text-white text-center text-3xl my-8">Stay up-to-date with what we're doing</h2>
        <ContactForm />
      </div>
    </section>
  )
}



export default Contact;