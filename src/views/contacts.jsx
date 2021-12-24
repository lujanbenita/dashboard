
import Contact from '../components/contacts/contact';
import ContactInfo from '../components/contacts/contactInfo';
import FavoriteIcon from '../components/icons/favoriteIcon';
import PeopleIcon from '../components/icons/peopleIcon';
import NewContactModal from '../components/modal/newContactModal';
import UseContacts from '../hooks/useContacts';
import LayoutDashboard from '../layout/layoutDashboard';


const Contacts = () => {

  const {
    contact,
    contacts,
    showModal,
    setContacts,
    setShowModal,
    handleClick,
    handleFavoriteContacts,
    handleAllContacts,
    handleFavorite,
    handleRemove,
    handleNewContact,
  } = UseContacts()

  return (
    <LayoutDashboard  title={"CONTACTS"}>

      <div className="contacts">
        <div className="contacts__sidebar">

          <div className="contacts__sidebar-options">
            <div onClick={handleNewContact}>  New Contact</div> 
          </div> 
          <div className="contacts__sidebar-options">
            <div onClick={handleAllContacts}> <PeopleIcon /> All</div> 
            <div onClick={handleFavoriteContacts}> <FavoriteIcon className="favorite"/> Favorites</div>
          </div> 

          <div className="contacts__sidebar-contacts">
            {contacts !== undefined && contacts.length > 0 &&
              contacts.map((item, index) => (
                <Contact
                  key={index}
                  index={index}
                  name={item.name}
                  lastName={item.lastName}
                  position={item.position}
                  url={item.url}
                  favorite={item.favorite}
                  onClick={handleClick}
                  handleRemove={handleRemove}
                  handleFavorite={handleFavorite}
                  item={item}
                />))
            }
            
          </div>
        </div>

        <div className="contacts__contact-info">
            
        {contact !== undefined && !showModal && 
          <Contact
            name={contact.name}
            lastName={contact.lastName}
            position={contact.position}
            url={contact.url}
            icons={false}
          />
        }

        {showModal ?
          <NewContactModal
            setContacts={setContacts}
            contacts={contacts}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        :  
          contact !== undefined ?
            <ContactInfo
              name={contact.name}
              lastName={contact.lastName}
              company={contact.company}
              position={contact.position}
              email={contact.email}
              phone={contact.phone}
              city={contact.city}
              note={contact.note}
            />
            : <div className="contacts__info-select">Please select a contact to show details.</div>    
          }
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default Contacts;