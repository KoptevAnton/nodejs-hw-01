import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const existingContacts = await readContacts();
  if (existingContacts) {
    existingContacts.pop();
  }
  await writeContacts(existingContacts);
};

removeLastContact();
