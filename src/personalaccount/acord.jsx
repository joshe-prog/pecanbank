import Accordion from 'react-bootstrap/Accordion';
import "../App.css"
const faqs = [
  {
    q: "How do I create a Pecan account?",
    a: (
      <>
        <p>
          Start by downloading our free mobile app from the App Store or Google
          Play Store. Once it’s installed, all you need to open an online money
          account is:
        </p>
        <ul>
          <li>An email address and phone number</li>
          <li>An ID document, like your voter’s card and NIMC slip (NIN)</li>
        </ul>
        <p>
          We’ll ask you for a short video selfie in the app to confirm your
          identity and protect you from fraud. Once that’s done, all that’s left
          is to start using your app to spend, stash and receive money.
        </p>
      </>
    ),
  },
  {
    q: "Will I need proof of address to create an online money account?",
    a: (
      <>
        <p>
          Start by downloading our free mobile app from the App Store or Google
          Play Store. Once it’s installed, all you need to open an online money
          account is:
        </p>
        <ul>
          <li>An email address and phone number</li>
          <li>An ID document, like your voter’s card and NIMC slip (NIN)</li>
        </ul>
        <p>
          We’ll ask you for a short video selfie in the app to confirm your
          identity and protect you from fraud. Once that’s done, all that’s left
          is to start using your app to spend, stash and receive money.
        </p>
      </>
    ),
  },
  {
    q: "How soon can I start using an online money account?",
    a: (
      <>
        <p>
          Start by downloading our free mobile app from the App Store or Google
          Play Store. Once it’s installed, all you need to open an online money
          account is:
        </p>
        <ul>
          <li>An email address and phone number</li>
          <li>An ID document, like your voter’s card and NIMC slip (NIN)</li>
        </ul>
        <p>
          We’ll ask you for a short video selfie in the app to confirm your
          identity and protect you from fraud. Once that’s done, all that’s left
          is to start using your app to spend, stash and receive money.
        </p>
      </>
    )
  },
  {
    q: "How can a customer make deposits into their savings account?",
    a: (
      <>
        <p>
          Start by downloading our free mobile app from the App Store or Google
          Play Store. Once it’s installed, all you need to open an online money
          account is:
        </p>
        <ul>
          <li>An email address and phone number</li>
          <li>An ID document, like your voter’s card and NIMC slip (NIN)</li>
        </ul>
        <p>
          We’ll ask you for a short video selfie in the app to confirm your
          identity and protect you from fraud. Once that’s done, all that’s left
          is to start using your app to spend, stash and receive money.
        </p>
      </>
    )
  },
];

function FlushExample() {
  return (
     <Accordion defaultActiveKey="0" flush className="faq-accordion">
      {faqs.map((item, i) => (
        <Accordion.Item eventKey={String(i)} key={i} className="faq-item">
          <Accordion.Header>{item.q}</Accordion.Header>
          <Accordion.Body>{item.a}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
   
  );
}

export default FlushExample;