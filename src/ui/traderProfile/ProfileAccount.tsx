import { format } from "date-fns";
import ProfileFlex, { LiStyle, SpanStyle, UlStyle } from "./ProfileStyle";

interface ProfileAccountT {
  joined: string;
}

function ProfileAccount({ joined }: ProfileAccountT) {
  const date = format(joined, "MMMM d, yyyy") || "April 25, 2024";

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
