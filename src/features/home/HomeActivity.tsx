import CoinTable from "../../ui/CoinTable";

import Row from "../../ui/Row";
import HometableOpertions from "./HomeTableOperation";

function HomeActivity() {
  return (
    <>
      <Row type="horizontal">
        <span>COIN LIST</span>
        <HometableOpertions />
      </Row>
      <CoinTable />;
    </>
  );
}

export default HomeActivity;
