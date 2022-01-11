import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

const API_ENDPOINT = "contacts";

const getContacts = createAsyncThunk("contacts/getUtterContactsStatus", () => api.getUtterContacts(API_ENDPOINT));

const addContact = createAsyncThunk("contacts/addContactStatus", newContact => api.saveContact(API_ENDPOINT, newContact));

const deleteContact = createAsyncThunk("contacts/deleteContactStatus", id => api.deleteContact(API_ENDPOINT, id));

export { getContacts, addContact, deleteContact };