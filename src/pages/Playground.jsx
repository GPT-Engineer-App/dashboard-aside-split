import { Outlet } from 'react-router-dom';

const Playground = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Playground</h1>
      <Outlet />
    </div>
  );
};

export default Playground;