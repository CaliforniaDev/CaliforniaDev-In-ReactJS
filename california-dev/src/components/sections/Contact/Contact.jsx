import { useValidation } from 'hooks/useValidation';
import { validateContactForm } from './utils/validateContactForm';

import { ContactSection, RadioButtonFieldset } from './Contact.styles';
import { TextField } from 'components/ui/TextField';
import { Button } from 'components/ui/Button';
import { RadioButton } from 'components/ui/RadioButton';

import {
  DotPattern,
  ZigZagPattern,
  EclipsePattern,
} from 'assets/images/shapes';

const SVGDecoration = () => {
  return (
    <div className="decoration-container">
      <DotPattern className="dots-svg top" />
      <ZigZagPattern className="zigzag-svg" />
      <EclipsePattern className="eclipse-svg" />
      <DotPattern className="dots-svg bottom" />
    </div>
  );
};
const FormHeader = () => {
  return (
    <header>
      <h2>Contact Us</h2>
      <p className="contact-subtext">
        Any question or remarks? <span>Just write us a message below!</span>
      </p>
    </header>
  );
};

export const Contact = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    inquiryType: '',
    message: '',
  };

  const { formData, formErrors, handleChange, handleSubmit } = useValidation(initialState, validateContactForm);
  return (
    <ContactSection id="contact-us-section">
      <div className="content-container">
        <SVGDecoration />
        <form onSubmit={handleSubmit} className="contact-form">
          <FormHeader />
          <fieldset className="field-grid">
            <TextField
              type="text"
              name="firstName"
              label="First Name"
              value={formData.firstName}
              error={formErrors.firstName}
              id="firstName"
              onChange={handleChange}
            />
            <TextField
              type="text"
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              error={formErrors.lastName}
              id="lastName"
              onChange={handleChange}
            />
            <TextField
              type="text"
              name="email"
              label="Email"
              value={formData.email}
              error={formErrors.email}
              id="email"
              onChange={handleChange}
            />
            <TextField
              type="text"
              name="phoneNumber"
              label="Phone Number"
              value={formData.phoneNumber}
              error={formErrors.phoneNumber}
              id="phoneNumber"
              onChange={handleChange}
            />
          </fieldset>
          <RadioButtonFieldset>
            <legend>Select Subject?</legend>
            <RadioButton
              label="Hiring Inquiry"
              name="inquiryType"
              value="hiring"
              id="inquiryTypeHiring"
              checked={formData.inquiryType === 'hiring'}
              onChange={handleChange}
            />
            <RadioButton
              label="Feedback"
              name="inquiryType"
              value="feedback"
              id="inquiryTypeFeedback"
              checked={formData.inquiryType === 'feedback'}
              onChange={handleChange}
            />
            <RadioButton
              label="Collaboration Opportunities"
              name="inquiryType"
              value="collaboration"
              id="inquiryTypeCollaboration"
              checked={formData.inquiryType === 'collaboration'}
              onChange={handleChange}
            />
            <RadioButton
              label="Technical Support"
              name="inquiryType"
              value="technical"
              id="inquiryTypeTechnical"
              checked={formData.inquiryType === 'technical'}
              onChange={handleChange}
            />
          </RadioButtonFieldset>
          <TextField
            multiline
            label="Write your message..."
            name="message"
            className="form-message"
            value={formData.message}
            id="message"
            onChange={handleChange}
          />
          <Button
            type="submit"
            className="submit-button"
            variant="filled"
            text="Submit"
          />
        </form>
      </div>
    </ContactSection>
  );
};
