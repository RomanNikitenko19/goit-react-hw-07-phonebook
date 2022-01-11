import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacts/contactsOperations";
import PhoneBookForm from "../../componens/PhoneBookForm";
import Contacts from "../Contacts";
import MyLoader from '../MyLoader';

const PhoneBook = () => {
  const сontacts = useSelector(state => state.contacts.data.items);
  const loading = useSelector(state => state.contacts.data.loading);
  const error = useSelector(state => state.contacts.data.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <PhoneBookForm />
      {loading && <MyLoader />}
      {Boolean(сontacts.length) && <Contacts />}
      {error && <h2 style={{ textAlign: "center" }}>{error.message}</h2>}
    </>
  );
};

export default PhoneBook;
