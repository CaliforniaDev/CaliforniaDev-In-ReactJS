/**
 * Validates the data of a contact form.
 *
 * @param {Object} formData - The data collected from the form.
 * @returns {Object} An object containing any validation errors.
 */

export function validateContactForm(formData) {
  const errors = {};
  const { firstName, lastName, email, phoneNumber, inquiryType } = formData;

  if (!firstName) errors.firstName = 'First name is required';
  if (!lastName) errors.lastName = 'Last name is required';

  if (!email && !phoneNumber) {
    errors.email = 'Email or phone number is required';
    errors.phoneNumber = 'Email or phone number is required';
    return errors;
  }
  // Check if email is valid
  if (email && !/^\S+@\S+\.\S+$/.test(email))
    errors.email = 'Email address is invalid';
  
  // Check if phone number is valid
  if (phoneNumber && !/^[0-9]+$/.test(phoneNumber))
    errors.phoneNumber = 'Phone number is invalid';

  if (!inquiryType) errors.inquiryType = 'Inquiry type is required';

  return errors;
}
