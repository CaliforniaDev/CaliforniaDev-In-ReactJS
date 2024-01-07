/**
 * Submits the contact form data to the server.
 *
 * @param {Object} formData - The data collected from the contact form.
 * @returns {Promise<Object>} A promise that resolves with the response data if the submission is successful, or rejects with an error if the submission fails.
 */

export const submitContactForm = async formData => {
  try {
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Form submission failed with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
