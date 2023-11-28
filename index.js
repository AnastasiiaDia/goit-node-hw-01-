const contacts = require("./contacts");

const argv = require("yargs").argv;
// const { hideBin } = require("yargs/helpers");

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);

      break;

    case "get":
      const CurrentContact = await contacts.getContactById(contactId);
      console.log(CurrentContact);

      break;

    case "add":
      const NewContact = await contacts.addContact(name, email, phone);
      console.log(NewContact);
      break;

    case "remove":
      const delatedContact = await contacts.removeContact(contactId);
      console.log(delatedContact);
      break;

    case "update":
      const updatedContact = await contacts.updateContact(
        id,
        name,
        email,
        phone
      );
      console.log(updatedContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
