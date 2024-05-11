import { format } from "date-fns";
import { FormDataT } from "../../Interfaces";
import SpinnerMini from "../SpinnerMini";
import ProfileFlex, { LiStyle, SpanStyle, UlStyle } from "./ProfileStyle";

interface ProfileAccountT {
  data: FormDataT[];
  isLoading: boolean;
}

function ProfileAccount({ data, isLoading }: ProfileAccountT) {
  if (isLoading) return <SpinnerMini />;
  const joined = data![0].created_at;

  const date = format(joined, "MMMM d, yyyy");

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
