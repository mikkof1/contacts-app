using System;
using System.Collections.Generic;
using System.Linq;
using WebApi.Models;
using System.IO;
using Newtonsoft.Json;

namespace WebApi.Services
{
    public class ContactsHandler
    {
        private static List<Contact> _contactsList = new List<Contact>();
        //  private static int _id = 10;
        private readonly string _filePath = "d:\\data.txt";

        private bool _makeTestList = true;

        public ContactsHandler()
        {
            ReadListJson();
        }

        public List<Contact> GetList()
        {
            return _contactsList;
        }

        public int AddNewContact(Contact newContact)
        {
            int id = FindNextId();
            newContact.id = id;
            _contactsList.Add(newContact);
            SaveDataJson();
            return id;
        }

        public bool EditContact(Contact contact)
        {
            try
            {
                int index = _contactsList.FindIndex(c => c.id == contact.id);
                _contactsList[index] = contact;
                SaveDataJson();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool DeleteContact(int id)
        {
            try
            {
                int index = _contactsList.FindIndex(c => c.id == id);
                _contactsList.RemoveAt(index);
                SaveDataJson();
                return true;
            }
            catch
            {
                return false;
            }
        }

        private void ReadListJson()
        {
            if (!File.Exists(_filePath))
            {
                if (_makeTestList)
                {
                    _contactsList = TestContactsList();
                    _makeTestList = false;
                }
                SaveDataJson();
            }

            string data = File.ReadAllText(_filePath);
            _contactsList = JsonConvert.DeserializeObject<List<Contact>>(data);

        }

        private void SaveDataJson()
        {
            string jsonList = JsonConvert.SerializeObject(_contactsList);
            File.WriteAllText(_filePath, jsonList);
        }

        private int FindNextId()
        {
            int returnValue = 0;
            if (_contactsList.Count > 0)
            {
                returnValue = _contactsList.Max(res => res.id);
                returnValue += 1;
            }
            return returnValue;
        }

        private List<Contact> TestContactsList()
        {
            List<Contact> contactsList = new List<Contact>();

            Contact con1 = new Contact
            {
                id = 1,
                firstName = "Aku",
                lastName = "Ankka",
                phone = "456-789789",
                address = "Paratiisitie 13",
                city = "Ankkalinna"
            };
            contactsList.Add(con1);

            Contact con2 = new Contact()
            {
                id = 2,
                firstName = "Teppo",
                lastName = "Tulppu",
                phone = "456-123123",
                address = "Paratiisitie 14",
                city = "Ankkalinna"
            };
            contactsList.Add(con2);

            Contact con3 = new Contact()
            {
                id = 3,
                firstName = "Bruce",
                lastName = "Wayne",
                phone = "555-666 123",
                address = "Wayne Manor",
                city = "Gotham City"
            };
            contactsList.Add(con3);

            return contactsList;
        }

    }
}
