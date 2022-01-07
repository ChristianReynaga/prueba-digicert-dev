import React from 'react';
import './style.css';
import { ServiceUser } from './service-user.js';

function handleClickGetUser() {
  let id = prompt('Id del usuario', 4);
  let c = new ServiceUser();
  c.getUser(id);
}

function handleClickListUser() {
  let c = new ServiceUser();
  let page = prompt('page', 2);
  c.listUsers(page);
}

function handleClickCreateUser() {
  let name = prompt('Nombre del usuario', 'morpheus');
  let job = prompt('Job del usuario', 'leader');

  let c = new ServiceUser();
  c.createUsers(name, job);
}

export default function App() {
  return (
    <div>
      <h1>USUARIOS</h1>

      <div>
        <button className="margen" onClick={handleClickGetUser}>
          OBTENER USUARIO
        </button>
      </div>

      <div>
        <button className="margen" onClick={handleClickListUser}>
          LISTAR USUARIO
        </button>
      </div>

      <div>
        <button className="margen" onClick={handleClickCreateUser}>
          CREAR USUARIO
        </button>
      </div>
    </div>
  );
}
