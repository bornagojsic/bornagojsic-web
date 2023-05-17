import {FC, memo, useCallback, useMemo, useState} from 'react';
// import sendgrid from '@sendgrid/mail';

// sendgrid.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // const emailData = {
      //   to: 'your-email@example.com', // Replace with your email address
      //   from: data['email'],
      //   subject: `New message from ${data['name']}`,
      //   text: data['message'],
      // };

      // try {
      //   await sendgrid.send(emailData);
      //   alert('Email sent successfully!');
      //   // Clear form fields
      //   setData(defaultData);
      // } catch (error) {
      //   console.error('Error sending email:', error);
      //   alert('An error occurred while sending the email. Please try again later.');
      // }
      console.log('Data to send: ', data);
    },
    [data],
  );

  const inputClasses =
    'bg-cyan-600 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-200 placeholder:text-sm text-neutral-100 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-cyan-500 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
