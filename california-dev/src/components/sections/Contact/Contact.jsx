import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { motionVariants as variants } from 'components/ui/utils/motionVariants';

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

export const Contact = React.forwardRef((props, ref) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    inquiryType: '',
    message: '',
  };
  const { formData, formErrors, handleChange, handleSubmit } = useValidation(
    initialState,
    validateContactForm
  );
  const firstNameRef = React.useRef(null);
  const lastNameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const phoneNumberRef = React.useRef(null);
  const radioFieldsetRef = React.useRef(null);
  const messageRef = React.useRef(null);

  const [selectedRadio, setSelectedRadio] = useState('');

  function handleEnterKey(e, nextFieldRef, isRadioGroup = false) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (isRadioGroup) {
        if (!selectedRadio) {
          setSelectedRadio('firstRadioValue'); // Replace 'firstRadioValue' with the actual value of your first radio button
        }
        // Focus the first radio button in the group
        const firstRadioButton = radioFieldsetRef.current?.querySelector(
          'input[type="radio"]'
        );
        firstRadioButton?.focus();
      } else {
        nextFieldRef.current?.focus();
      }
    }
  }

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
              error={formErrors.firstName}
              id="firstName"
              onChange={handleChange}
              onKeyDown={e => handleEnterKey(e, lastNameRef)}
            />
            <TextField
              ref={lastNameRef}
              type="text"
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              error={formErrors.lastName}
              id="lastName"
              onChange={handleChange}
              onKeyDown={e => handleEnterKey(e, emailRef)}
            />
            <TextField
              ref={emailRef}
              type="text"
              name="email"
              label="Email"
              value={formData.email}
              error={formErrors.email}
              id="email"
              onChange={handleChange}
              onKeyDown={e => handleEnterKey(e, phoneNumberRef)}
            />
            <TextField
              ref={phoneNumberRef}
              type="text"
              name="phoneNumber"
              label="Phone Number"
              value={formData.phoneNumber}
              error={formErrors.phoneNumber}
              id="phoneNumber"
              onChange={handleChange}
              onKeyDown={e => handleEnterKey(e, messageRef)}
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
            onKeyDown={e => handleEnterKey(e, 'submit-button')}
          />
          <Button
            type="submit"
            className="submit-button"
            variant="filled"
            text="Submit"
          />
        </form>
      </motion.div>
    </ContactSection>
  );
});

Contact.displayName = 'Contact';
