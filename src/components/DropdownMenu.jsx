import { avatar, closeBtn } from "../assets";

export default function DropdownMenu() {
  return (
        <div
          id="dropdownInformation"
          className="z-[100] bg-primary divide-gray-100 rounded-[15px] shadow w-[391px] h-[526px] fixed right-5 border pl-[29px]"
        >
          <img src={closeBtn} className="mt-[31px] ml-[295px]" />
          <div className="flex items-center gap-[22px] my-[26px]">
            <img src={avatar} />
            <div className="font-bold text-2xl">User</div>
          </div>
          <ul
            className="flex flex-col text-xl font-normal text-gray-100 gap-[10px]"
            aria-labelledby="dropdownInformationButton"
          >
            <li>
              <a
                href="#"
                className="hover:text-white"
              >
                Perfil
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white"
              >
                Cuenta
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white"
              >
                Ajustes
              </a>
            </li>
            <div className="w-[333px] h-[1px] bg-gray-100 my-[10px]"></div>
            <li>
              <a
                href="#"
                className="hover:text-white"
              >
                Cupones
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white"
              >
                Terminos de servicios
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white"
              >
                Politica de Privacidad
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white"
              >
                Politica de reembolso de la tienda
              </a>
            </li>
          </ul>
          <div className="w-[333px] h-[1px] bg-gray-100 my-5"></div>
            <a
              href="#"
              className="font-normal text-xl text-gray-100 hover:text-white"
            >
              Cerrar sesión
            </a>
        </div>
  );
}
