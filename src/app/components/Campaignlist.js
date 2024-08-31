"use client"

import React from 'react';
import Card from './Card';

export default function CampaignList({ onFundClick }) {
   const cards = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtPh-nz21daNqctDcH83AVkdu5w5C1S44yJw&s',
      title: 'CRED',
      description: 'CRED is a platform where you can pay your credit card bills and get rewarded for it. The platform has created a new model where users get “CRED coins” when they pay their bills through the CRED app. These coins can later be redeemed for buying any product, entering a contest, or joining any workshop. ',
      fundLink: 'https://example.com/fund1',
      statsLink: 'https://cred.club/',
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuh02938Hn-_8APlzBXzAHvgn6-eCO667v0A&s',
      title: 'Vernacular',
      description: 'This startup is an AI-First SaaS business aiming to become the leading voice automation and AI platform globally. The company provides Speech recognition and Voice assistants as a service to the banking, Food and Beverage and Hospitality industries. Their services have the least human interference and can handle complex servicing issues as well. ',
      fundLink: 'https://example.com/fund2',
      statsLink: 'https://skit.ai/',
    },
    {
        id: 1,
        image: 'https://images-platform.99static.com//cU0qBaO133OuhkyLKG1l25ZX9As=/138x129:869x860/fit-in/590x590/99designs-contests-attachments/84/84068/attachment_84068886',
        title: 'Rocket',
        description: 'Leveraging battle-tested business plan tactics, human-centered design, and Lean methodologies, we provide comprehensive and customizable operations frameworks, a collaborative web app, practical business coaching, a multi-city investor network, and best-in-class learning resources to help founders build desirable products and accelerate growth',
        fundLink: 'https://example.com/fund1',
        statsLink: 'https://rocket.com/',
      },
      {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbqVAYyArVBtuMLxhiehD-i1-K-0AFtiTN2A&s',
        title: 'Meesho',
        description: 'Founded in 2015 by IIT-Delhi Graduates, Meesho is the reseller platform that is all set to become the big e-commerce distribution channel where the homepreneurs sell products through WhatsApp, Facebook, and Instagram. The company is valued at $2.1 billion after raising funds of $300 million.',
        fundLink: 'https://example.com/fund2',
        statsLink: 'https://example.com/stats2',
      },
    // Add more items as needed
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          {...card}
          onFundClick={() => onFundClick(card)}
        />
      ))}
    </div>
  );
}
