import { ContactSection, RadioButtonFieldset } from "./Contact.styles";
import { TextField } from "components/ui/TextField";
import { Button } from "components/ui/Button";
import { RadioButton } from "components/ui/RadioButton";
import {
  DotPattern,
  ZigZagPattern,
  EclipsePattern,
} from "assets/images/shapes";

export const Contact = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
  }
  return (
    <ContactSection id="contact-us-section">
      <div className="decoration-container">
        <DotPattern className="dots-svg top" />
        <ZigZagPattern className="zigzag-svg" />
        <EclipsePattern className="eclipse-svg" />
        <DotPattern className="dots-svg bottom" />
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <header>
          <h2>Contact Us</h2>
          <p className="contact-subtext">
            Any question or remarks? <span>Just write us a message below!</span>
          </p>
        </header>
        <fieldset className="field-grid">
          <TextField type="text" label="First Name" />
          <TextField type="text" label="Last Name" />
          <TextField type="text" label="Email" />
          <TextField type="text" label="Phone Number" />
        </fieldset>

        <RadioButtonFieldset>
          <legend>Select Subject?</legend>
          <RadioButton
            label="Hiring Inquiry"
            name="inquiryType"
            value="hiring"
          />
          <RadioButton label="Feedback" name="inquiryType" value="feedback" />
          <RadioButton
            label="Collaboration Opportunities"
            name="inquiryType"
            value="collaboration"
          />
          <RadioButton
            label="Technical Support"
            name="inquiryType"
            value="technical"
          />
        </RadioButtonFieldset>

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
