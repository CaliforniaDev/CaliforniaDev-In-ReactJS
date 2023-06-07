import { ContactSection } from "./ContactStyles";
import { TextField } from "components/ui/TextField";
import { Button } from "components/ui/Button";

export const Contact = () => {

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
  }
  return (
    <ContactSection>
      <h2>Contact Us</h2>
      <h3>Any question or remarks? <span>Just write us a message below!</span></h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <TextField type="text" label="First Name" />
        <TextField type="text" label="Last Name"/>
        <TextField type="text" label="Email"/>
        <TextField type="text" label="Phone Number"/>
        <TextField multiline className="form-message" label="Write your message..." />
        <Button type="submit" className="submit-button" variant="filled" text="Submit" />
        
      </form>
    </ContactSection>
  );
};
