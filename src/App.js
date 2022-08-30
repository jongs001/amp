import React, { useState, useEffect } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { API, Storage } from 'aws-amplify';


const initialFormState = { name: '', description: '' }

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

 
  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);

  }

  async function uploadDocument() {
    if (!formData.name || !formData.description || !formData.image) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  return (
    
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
    
    <header class="masthead mb-auto">
      <div class="inner">
        <h1 class="masthead-brand">N&#252;ber</h1>
        <nav class="nav nav-masthead justify-content-center">
        </nav>
      </div>
    </header>
      <h1>Upload Driver Identity Documents</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Document name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Document description"
        value={formData.description}
      />
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={uploadDocument}>Upload Documents</button>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
//export default App;