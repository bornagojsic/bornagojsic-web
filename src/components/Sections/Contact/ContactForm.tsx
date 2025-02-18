import React, {FC, memo, useCallback, useMemo, useState} from 'react';
// import emailjs from '@emailjs/browser';

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

  const form = useMemo(() => React.createRef<HTMLFormElement>(), []);

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

      // const serviceID = 'service_web_portfolio';
      // const templateID = 'template_9dxph42';
      // const userID = process.env.REACT_APP_KEY;

      // console.log(userID);

      // const templateParams = {
      //   user_name: data.name,
      //   user_email: data.email,
      //   message: data.message,
      // };

      // emailjs.send(serviceID, templateID, templateParams, userID)
      //   .then((result : any) => {
      //       console.log(result.text);
      //       // reset the form
      //       if (form.current !== null)
      //         form.current.reset();
      //   }, (error : any) => {
      //       console.log(error.text);
      // });

      console.log('Data to send: ', data);
    },
    [data],
  );

  const inputClasses =
    'bg-sky-600 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-200 placeholder:text-sm text-neutral-100 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage} ref={form}>
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
        className="w-max rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-sky-700 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
