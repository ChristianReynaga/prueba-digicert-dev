export class ServiceUser {
  constructor() {}

  getUser(id) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://reqres.in/api/users/' + id, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }

  listUsers(page) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://reqres.in/api/users?page=' + page, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }

  createUsers(nombre, job) {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      name: nombre,
      job: job,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://reqres.in/api/users', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }
}
