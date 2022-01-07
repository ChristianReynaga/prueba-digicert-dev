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
  c.listUsers();
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
        <button onClick={handleClickGetUser}>OBTENER USUARIO</button>
      </div>

      <div>
        <button onClick={handleClickListUser}>LISTAR USUARIO</button>
      </div>

      <div>
        <button onClick={handleClickCreateUser}>CREAR USUARIO</button>
      </div>
    </div>
  );
}
