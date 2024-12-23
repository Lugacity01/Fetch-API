import {  NavLink, useNavigate } from "react-router-dom"


const Sidebar = () => {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const menus = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/posts',
      label: 'Posts',
    },
    {
      path: '/create-post',
      label: 'Create/Edit Post',
    },
    {
      path: '/settings',
      label: 'Settings',
    },
    {
      path: '/more-app',
      label: 'More API App',
    }
  ]


  return (
      <div className="h-screen sticky top-0">
          <aside className="w-64 h-full bg-gray-800 text-white flex flex-col">
            <div className="p-4 text-2xl font-semibold">Dashboard</div>
            <nav className="flex flex-col space-y-2 mt-4 px-4">
              {menus.map((menu, id) =>{
                return(
                  <NavLink
                  key={id}
                      to={menu.path}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-lg ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                      }
                    >
                      {menu.label}
                    </NavLink>

                )
              } )

              }
              {/* <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                }
              >
                Home
              </NavLink>
                <NavLink
                  onClick={handleClick}
                to="/posts"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                }
              >
                Posts
              </NavLink>
              <NavLink
                to="/create-post"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                }
              >
                Create/Edit Post
              </NavLink>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                }
              >
                Settings
              </NavLink>

              <NavLink
                to="/more-app"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                }
              >
                More API App
              </NavLink> */}
            </nav>
          </aside>
      
    </div>
  )
}

export default Sidebar