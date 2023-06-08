import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton } from './App.styled';
import PropTypes, { objectOf, string } from 'prop-types';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();
  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };
  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.phone}
            <DeleteButton onClick={handleDelete} id={contact.id}>
              Delete
            </DeleteButton>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(objectOf(string)),
  filter: PropTypes.string,
  handleDelete: PropTypes.func,
};
