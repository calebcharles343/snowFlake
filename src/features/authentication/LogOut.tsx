import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function LogOut() {
  const { logout, isPending } = useLogout();

  function handleClick() {
    logout();
  }
  return (
    <ButtonIcon disabled={isPending} onClick={handleClick}>
      {!isPending ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default LogOut;
