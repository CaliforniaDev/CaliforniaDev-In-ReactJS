import { useState } from 'react';
/**
 * Custom React hook for form validation.
 *
 * @param {Object} initialState - The initial form data.
 * @param {Function} validate - The function to validate the form data.
 * @returns {Object} Various pieces of state and functions to manage the form.
 */
export const useValidation = (initialState, validate) => {
  // State to hold form data
  const [formData, setFormData] = useState(initialState);
  // State to hold validation errors
  const [formErrors, setFormErrors] = useState({});

  /**
   * Handles changes to form inputs.
   *
   * @param {Event} event - The input change event.
   */
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    // Perform validation on form data
    const errors = validate(formData);
    // Update error state
    setFormErrors(errors);
    console.log(formErrors);
    // If errors exist, exit function (don't submit form)
    if (Object.keys(errors).length) {
      console.log('Form has errors');
      return;
    }
    // TODO: Implement form submission here
    console.log('Form submitted');
  };
  return { formData, formErrors, handleChange, handleSubmit };
};
