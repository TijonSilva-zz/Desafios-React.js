import React, { useEffect, useState } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  async function handleAddRepository() {
    const [respositories, setrepositories] = useState([]);
  }
  useEffect(() => {
    api.get('repositories').then(response => {
      setrepositories(response.data);
    })
  }, [])

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {respositories.map(repository => (
          <li key={repository.id}>
            {repository.title}

            <button onClick={() => handleRemoveRepository(1)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
