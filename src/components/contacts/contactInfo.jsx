
const ContactInfo = ({
  name,
  lastName,
  company,
  position,
  email,
  phone,
  city,
  note,
}) => {
  return (
    <div className="contacts__info">
      <div className="contacts__row">
        <div className="contacts__info-title">First Name </div>
        <div className="contacts__info-response">{name} </div>
      </div>
      <div className="contacts__row">
        <div className="contacts__info-title">Last Name </div>
        <div className="contacts__info-response">{lastName}</div>
      </div>
      <div className="contacts__row">
        <div className="contacts__info-title">Company </div>
        <div className="contacts__info-response">{company}</div>
      </div>
      <div className="contacts__row">
        <div className="contacts__info-title">Position </div>
        <div className="contacts__info-response">{position}</div>
      </div>
      <div className="contacts__row">
        <div className="contacts__info-title">Email </div>
        <div className="contacts__info-response">{email}</div>
      </div>
      <div className="contacts__row">
        <div className="contacts__info-title">Phone </div>
        <div className="contacts__info-response">{phone}</div>
      </div>
      <div className="contacts__row">
        <div className="contacts__info-title">City </div>
        <div className="contacts__info-response">{city}</div>
      </div>
      <div className="contacts__row">
        <div className="contacts__info-title">Note </div>
        <div className="contacts__info-response">{note}</div>
      </div>
    </div>
  );
};

export default ContactInfo;