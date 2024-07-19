import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      { id: "id-5", name: "John Doe", number: "111-22-33" },
      { id: "id-6", name: "Jane Smith", number: "222-33-44" },
      { id: "id-7", name: "Emily Davis", number: "333-44-55" },
      { id: "id-8", name: "Michael Johnson", number: "444-55-66" },
      { id: "id-9", name: "Sarah Brown", number: "555-66-77" },
      { id: "id-10", name: "David Wilson", number: "666-77-88" },
      { id: "id-11", name: "Laura Martinez", number: "777-88-99" },
      { id: "id-12", name: "James Taylor", number: "888-99-00" },
      { id: "id-13", name: "Olivia Anderson", number: "999-00-11" },
      { id: "id-14", name: "Daniel Thomas", number: "000-11-22" },
      { id: "id-15", name: "Sophia Moore", number: "111-22-44" },
      { id: "id-16", name: "Matthew Lee", number: "222-33-55" },
      { id: "id-17", name: "Ava Harris", number: "333-44-66" },
      { id: "id-18", name: "Joshua Clark", number: "444-55-77" },
      { id: "id-19", name: "Mia Walker", number: "555-66-88" },
      { id: "id-20", name: "Ethan Lewis", number: "666-77-99" },
    ],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
