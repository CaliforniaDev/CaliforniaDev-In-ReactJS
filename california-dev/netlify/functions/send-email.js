require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async event => {
  console.log('Function triggered');
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const data = JSON.parse(event.body);

  const msg = {
    to: 'leodaniels@californiadev.com',
    from: 'leodaniels@californiadev.com',
    subject: 'New Message from CaliforniaDev.com',
    text: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nMessage: ${data.message}`,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return { statusCode: error.code, body: error.message };
  }
};
