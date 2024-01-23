import { useState } from 'react';
import { contactFormInitialState } from 'components/sections/Contact/contactFormInitialStates';
/**
 * Custom React hook for form validation.
 *
 * @param {Object} initialState - The initial form data.
 * @param {Function} validate - The function to validate the form data.
 * @returns {Object} Various pieces of state and functions to manage the form.
 */
export const useValidation = validate => {
  const [formData, setFormData] = useState(contactFormInitialState);
  const [formErrors, setFormErrors] = useState({});

  // Handle form changes
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleValidation = () => {
    const errors = validate(formData);
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  return {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    handleChange,
    handleValidation,
  };
};
