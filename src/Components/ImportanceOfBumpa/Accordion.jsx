import React, { useState } from 'react';
import './BumpaHelp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  const accordionsData = [
    {
      title: 'Create a business website',
      content: 'Set up your own business website in 60 seconds and display products for sale',
    },
    {
      title: 'Issue Invoices & Send Receipts',
      content: 'Create incoices for customers and send them recipts with the Bumpa app.',
    },
    {
      title: 'Record Sales,Expenses & Customer Information',
      content: 'Record all sales, expenses, and custtomer information securely on the cloud.',
    },
    {
        title: 'Send messages to Customers',
        content: 'Retain customers by sending them bulk SMS and emails on your Bumpa app.',
      },
      {
        title: 'Receive business report',
        content: 'Get a detailed, financial report of your business performance every month',
      },
      {
        title: 'Meta Intergration',
        content: 'Receive instagram DMs on Bummpa and sell 5x faster on Instagram ',
      },
  ];

  return (
    <div className='accordioncomponent'>
      {accordionsData.map((accordion, index) => (
        <div
          key={index}
          className={`accordion ${index === activeAccordion ? 'active' : ''}`}
          onClick={() => handleAccordionClick(index)}
        >
          <div className="accordion-header">
            <h3>{accordion.title}</h3>
            <FontAwesomeIcon
                          icon={index === activeAccordion ? faChevronUp : faChevronDown}
                          className="accordion-icon"            
            />
          </div>
          <div className="accordion-content">
            <p>{accordion.content}</p>
            <a href="/" class="btn btn1 btn--full">Learn more &rarr;   </a>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
