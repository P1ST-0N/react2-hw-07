import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectNameFilter, selectContacts],
  (filterContacts, contacts) => {
    // Проверяем, является ли contacts массивом
    if (!Array.isArray(contacts)) {
      return [];
    }

    // Применяем фильтр только если contacts является массивом
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterContacts.trim().toLowerCase())
    );
  }
);
