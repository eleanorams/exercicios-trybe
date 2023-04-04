import { legacy_createStore as createStore } from "redux"

const INITIAL_STATE = {
    status: 'offline',
    theme: 'dark',
  };

const reducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
  case 'CHANGE_THEME':
    return {
      ...state,
      theme: state.theme === 'dark' ? state.theme = 'light' : state.theme = 'dark'
    }
  case 'CHANGE_STATUS':
    return {
      ...state,
      status: state.status === 'offline' ? state.status = 'online' : state.status = 'offline'
    }
  default:
  return state;
}
}

const store = createStore(reducer);

  const themeButton = document.getElementById('toggle-theme');
  const statusButton = document.getElementById('toggle-status');

  themeButton.addEventListener('click', () => {
    store.dispatch({type: 'CHANGE_THEME' })
    console.log('oi')
  });

  statusButton.addEventListener('click', () => {
    store.dispatch({type: 'CHANGE_STATUS' });
    console.log('ola')
  });

  store.subscribe(() => {
    const { status, theme } = store.getState();
    const body = document.body;
    const statusElement = document.getElementById('status');

    if (theme === 'light') {
      themeButton.innerText = 'Dark Mode';
      body.style.backgroundColor = '#fff';
      body.style.color = '#333';
    } else {
      themeButton.innerText = 'Light Mode';
      body.style.backgroundColor = '#333';
      body.style.color = '#fff';
    }
  
    if (status === 'online') {
      statusButton.innerText = 'Ficar Offline';
      statusElement.innerText = 'Online';
    } else {
      statusButton.innerText = 'Ficar Online';
      statusElement.innerText = 'Offline';
    }
  });