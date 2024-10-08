import useCheckUpdate from 'hooks/useCheckUpdate';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from 'routes';
import VConsole from 'vconsole';

function App() {
  import.meta.env.VITE_VCONSOLE === 'production' && useCheckUpdate();

  useEffect(() => {
    import.meta.env.VITE_VCONSOLE === 'open' && new VConsole();

    return () => {};
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;
