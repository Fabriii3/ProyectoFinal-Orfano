import logo from "../../assets/images/logofb4.png"
import CartWidget from "./CartWidget"
import Topvar from "./Topvar";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Boton from "../../ejemplos/Boton";
import { NavLink } from "react-router-dom";


const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Trapos",
    href: "/productos/trapos",
  },
  {
    label: "Rejillas",
    href: "/productos/rejillas",
  },
  {
    label: "Esponjas",
    href: "/productos/esponjas",
  },
  {
    label: "Repasadores",
    href: "/productos/repasadores",
  },
  // {
  //   label: "Microfibra",
  //   href: "/productos/microfibras",
  // },
  {
    label: "Cabo",
    href: "/productos/cabo",
  },
];



const Navbar = () => {
  
  const { user, logout } = useContext(UserContext)
  const [open,setOpen]=useState(false);

  return (
    <div className='navfix shadow-md w-full top-0 left-0 z-50'>
      <Topvar />
      <div className='md:flex items-center justify-between bg-emerald-500 py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-blue-800'>
          <img className="imgfb img-logofb" src={logo} alt="Logo FB Distribuidora" />
        </div>
  
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
  
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-emerald-500 md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className="md:ml-8 text-xl font-bold italic md:my-0 my-7"
              onClick={() => setOpen(false)} // Cierra el menú cuando se selecciona una opción
            >
              <p className="text-white hover:text-emerald-800 duration-500 nav-query">{link.label}</p>
            </NavLink>
          ))}
  
          <CartWidget />
          {user.logged && (
            <div>
              <Boton onClick={logout} className="text-semibold italic text-white hover:text-emerald-800 duration-500">Cerrar sesión</Boton>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
  
  
};

export default Navbar


