import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const existingContacts = await readContacts();
  const generatedContacts = Array(number).fill(0).map(createFakeContact);
  await writeContacts([...existingContacts, ...generatedContacts]);
};

generateContacts(3);
