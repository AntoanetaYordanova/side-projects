import Parse from 'parse/dist/parse.min.js';
import './App.css';
import {create, getCurrentUser} from './services/user';

const PARSE_APPLICATION_ID = 'DBDv1wOhqokbs4k2aU0NQ3EfvTyTbA3FNceUSbNJ';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '2TieaZhAdOQVeUocph2cP88anyfqXw5C8mKQ0ZyU';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
const signUpUser = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const email = formData.get('email');
  const password = formData.get('password');

  const newUser = await create(email, password);
  console.log(newUser);
}

async function printUser () {
  const currentUser = await getCurrentUser();
  console.log(currentUser.get('username'));
}

printUser();

    return (
        <div className="App">
            <form onSubmit={signUpUser}>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div class="col-sm-10">
                        <input
                          name='email'
                            type="email"
                            class="form-control"
                            id="inputEmail3"
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div class="col-sm-10">
                        <input
                            name='password'
                            type="password"
                            class="form-control"
                            id="inputPassword3"
                        />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default App;
