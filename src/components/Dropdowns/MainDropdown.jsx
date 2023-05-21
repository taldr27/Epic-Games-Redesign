import { avatar, closeBtn, status } from "../../assets";
import CartDropdown from "./CartDropdown";
import FriendsDropdown from "./FriendsDropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import ProfileDropdown from "./ProfileDropdown";

const MainDropdown = ({ handleClickClose, dropdownElement }) => {
  return (
    <div>
      {
        dropdownElement === "profile" ? <ProfileDropdown handleClickClose={handleClickClose} /> : ''
      }
      {
        dropdownElement === "friends" ? <FriendsDropdown handleClickClose={handleClickClose} /> : ''
      }
      {
        dropdownElement === "notifications" ? <NotificationsDropdown handleClickClose={handleClickClose} /> : ''
      }
      {
        dropdownElement === "cart" ? <CartDropdown handleClickClose={handleClickClose} /> : ''
      }
    </div>
  );
}

export default MainDropdown;
