import { ContactSection, RadioButtonGroup } from "./Contact.styles";
import { TextField } from "components/ui/TextField";
import { Button } from "components/ui/Button";
import { RadioButton } from "components/ui/RadioButton";

export const Contact = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
  }
  return (
    <ContactSection>
      <h2>Contact Us</h2>
      <h3>
        Any question or remarks? <span>Just write us a message below!</span>
      </h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <TextField type="text" label="First Name" />
        <TextField type="text" label="Last Name" />
        <TextField type="text" label="Email" />
        <TextField type="text" label="Phone Number" />

        <h3>Select Subject?</h3>
        <RadioButtonGroup>
          <RadioButton label="Hiring Inquiry" name="inquiryType" value="hiring"/>
          <RadioButton label="Feedback" name="inquiryType" value="feedback" />
          <RadioButton label="Collaboration Opportunities" name="inquiryType" value="collaboration" />
          <RadioButton label="Technical Support" name="inquiryType" value="technical" />
        </RadioButtonGroup>
        
        <TextField
          multiline
          className="form-message"
          label="Write your message..."
        />
        <Button
          type="submit"
          className="submit-button"
          variant="filled"
          text="Submit"
        />
      </form>
    </ContactSection>
  );
};
