import React, { useState, useRef } from 'react';

import { motion } from 'framer-motion';
import { motionVariants as variants } from 'components/ui/utils/motionVariants';

import { useValidation } from 'hooks/useValidation';
import { validateContactForm } from './utils/validateContactForm';
import { submitContactForm } from './utils/contactServices';
import { contactFormInitialState as initialFormState } from './contactFormInitialStates'; // Netlify function integration with SendGrid

import { TextField } from 'components/ui/TextField';
import { RadioButton } from 'components/ui/RadioButton';
import { Button } from 'components/ui/Button';
import { ContactSection, RadioButtonFieldset } from './Contact.styles';

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

export const Contact = React.forwardRef((props, ref) => {
  const {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    handleChange,
    handleValidation,
  } = useValidation(validateContactForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submissionStatus, setSubmissionStatus] = useState(null);
  const [buttonText, setButtonText] = useState('Submit');

  // Refs for input fields for controlled focus management
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const radioFieldsetRef = useRef(null);
  const messageRef = useRef(null);
  const submitRef = useRef(null);

  const resetForm = () => {
    setFormData(initialFormState);
    setFormErrors({});
    // setSubmissionStatus(null);
    setButtonText('Submit');
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (handleValidation()) {
      setIsSubmitting(true);
      // setSubmissionStatus('Sending...');
      setButtonText('Sending...');
      try {
        // Submit form data through Netlify function, triggering SendGrid email
        await submitContactForm(formData);
        // setSubmissionStatus('Message sent successfully!');
        setButtonText('✔ Sent');
        setTimeout(resetForm, 3000);
      } catch (error) {
        console.error('Error submitting form:', error.message);
        // setSubmissionStatus('Error submitting form. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Handles 'Enter' keypress for field navigation
  const handleEnterKey = (e, nextRef) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextRef.current?.focus();
    }
  };

  return (
    <ContactSection ref={ref} id="contact-us-section">
      <motion.div
        variants={variants.fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="content-container"
      >
        <SVGDecoration />
        <form onSubmit={handleSubmit} className="contact-form">
          <FormHeader />
          <fieldset className="field-grid">
            <TextField
              ref={firstNameRef}
              type="text"
              name="firstName"
              label="First Name"
              value={formData.firstName}
              $error={formErrors.firstName}
              id="firstName"
              onChange={handleChange}
              onKeyDown={e => handleEnterKey(e, lastNameRef)}
              autoComplete="given-name"
            />
            <TextField
              ref={lastNameRef}
              type="text"
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              $error={formErrors.lastName}
              id="lastName"
              onChange={handleChange}
              onKeyDown={e => handleEnterKey(e, emailRef)}
              autoComplete="family-name"
            />
            <TextField
              ref={emailRef}
              type="text"
              name="email"
              label="Email"
              value={formData.email}
              $error={formErrors.email}
              id="email"
              onChange={handleChange}
              onKeyDown={e => handleEnterKey(e, phoneNumberRef)}
              autoComplete="email"
            />
            <TextField
              ref={phoneNumberRef}
              type="text"
              name="phoneNumber"
              label="Phone Number"
              value={formData.phoneNumber}
              $error={formErrors.phoneNumber}
              id="phoneNumber"
              onChange={handleChange}
              onKeyDown={e => handleEnterKey(e, messageRef)}
              autoComplete="tel"
            />
          </fieldset>
          <RadioButtonFieldset ref={radioFieldsetRef}>
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
            ref={messageRef}
            label="Write your message..."
            name="message"
            className="form-message"
            value={formData.message}
            id="message"
            onChange={handleChange}
            onKeyDown={e => handleEnterKey(e, submitRef)}
          />
          <Button
            type="submit"
            className="submit-button"
            variant="filled"
            text={buttonText}
            disabled={isSubmitting}
          />
        </form>
      </motion.div>
    </ContactSection>
  );
});

Contact.displayName = 'Contact';
