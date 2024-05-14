import { format } from "date-fns";
import { UserDataT } from "../../Interfaces";
import SpinnerMini from "../SpinnerMini";
import ProfileFlex, { LiStyle, SpanStyle, UlStyle } from "./ProfileStyle";

interface ProfileAccountT {
  data: UserDataT[];
  isLoading: boolean;
}

function ProfileAccount() {
  // const date = format(joined, "MMMM d, yyyy");
  const date = "April 25, 2024";

  return (
    <ProfileFlex type="account">
      <h3>Account</h3>

      <UlStyle>
        <LiStyle>
          <SpanStyle type="fade">joined</SpanStyle>{" "}
          <SpanStyle type="fade"> {date}</SpanStyle>
        </LiStyle>

        <LiStyle>
          <SpanStyle type="fade">Assets Value</SpanStyle>
          <span> $1,328,240.00</span>
        </LiStyle>
      </UlStyle>
    </ProfileFlex>
  );
}

export default ProfileAccount;
