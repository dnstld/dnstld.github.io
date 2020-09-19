import React from 'react';
import tw from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMobileAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const ContactInfo = () => {
  return (
    <address>
      <Contacts>
        <FontAwesomeIcon icon={faEnvelope} size="1x" className="mr-2 text-primary" />
        contato@denistoledo.com.br
      </Contacts>
      <Contacts>
        <FontAwesomeIcon icon={faMobileAlt} size="1x" className="mr-2 text-primary" />
        +55 11 982013667
      </Contacts>
      <Actions>
        <Link href="mailto:contato@denistoledo.com.br" target="blank" className="bg-blue-500">
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
        </Link>
        <Link href="tel:5511982013667" className="bg-green-600">
          <FontAwesomeIcon icon={faMobileAlt} className="text-2xl" />
        </Link>
        <Link href="https://wa.me/5511982013667" target="blank" className="bg-green-400">
          <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
        </Link>
      </Actions>
    </address>
  );
};

const Contacts = tw.div`
  inline-flex items-center not-italic font-thin tracking-wide
`

const Actions = tw.div`
  flex mt-4
`

const Link = tw.a`
  w-16 h-16 flex items-center justify-center shadow rounded-full mr-4
`

export default ContactInfo;