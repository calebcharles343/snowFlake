import ProfileFlex, {
  LiStyle,
  SpanStyle,
  UlStyle,
  ValueUnitStyle,
} from "./ProfileStyle";

function ProfileAssets() {
  return (
    <ProfileFlex type="assets">
      <h3>Assets</h3>

      <UlStyle>
        <LiStyle>
          <SpanStyle type="fade">Bitcoin</SpanStyle>
          <ValueUnitStyle>
            200.55<SpanStyle type="fade">BTC</SpanStyle>
          </ValueUnitStyle>
        </LiStyle>
        <LiStyle>
          <SpanStyle type="fade">Ethereum</SpanStyle>
          <ValueUnitStyle>
            200.55<SpanStyle type="fade">ETH</SpanStyle>
          </ValueUnitStyle>
        </LiStyle>

        <LiStyle>
          <SpanStyle type="fade">Doge</SpanStyle>
          <ValueUnitStyle>
            560,000<SpanStyle type="fade">DOGE</SpanStyle>
          </ValueUnitStyle>
        </LiStyle>

        <LiStyle>
          <SpanStyle type="fade">Ripple</SpanStyle>
          <ValueUnitStyle>
            10,000<SpanStyle type="fade">XRP</SpanStyle>
          </ValueUnitStyle>
        </LiStyle>
      </UlStyle>

      <a href="url">More assets</a>
    </ProfileFlex>
  );
}

export default ProfileAssets;
