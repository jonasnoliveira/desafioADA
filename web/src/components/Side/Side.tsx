import { Button, NavLogo } from 'components';
import { Link } from 'react-router-dom';
import { FaHome, FaCog, FaSignOutAlt, FaTable } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <NavLogo />
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link to="/">
                  <Button>
                    <p className="pr-2">
                      <FaHome />
                    </p>
                    Home
                  </Button>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link to="/csv">
                  <Button>
                    <p className="pr-2">
                      <FaTable />
                    </p>
                    CSV
                  </Button>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link to="/config">
                  <Button>
                    <p className="pr-2">
                      <FaCog />
                    </p>
                    Configurações
                  </Button>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link to="/logout">
                  <Button>
                    <p className="pr-2">
                      <FaSignOutAlt />
                    </p>
                    Sair
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
