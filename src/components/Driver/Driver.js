import DriverInfo from "./DriverInfo";
import DriverResults from "./DriverResults";
import {
  StyledStackDriver,
  StyledPaperDriver,
  StyledPaperResults,
} from "./styles";

const Driver = ({
  driverInfo,
  driverMedia,
  driverResults,
  driver,
  changePage,
  totalPages,
}) => {
  return (
    <StyledStackDriver direction="row">
      <StyledPaperDriver elevation={2}>
        <DriverInfo
          driverInfo={driverInfo}
          driverMedia={driverMedia}
          driver={driver}
        />
      </StyledPaperDriver>

      <StyledPaperResults elevation={2}>
        <DriverResults
          driverResults={driverResults}
          changePage={changePage}
          totalPages={totalPages}
        />
      </StyledPaperResults>
    </StyledStackDriver>
  );
};

export default Driver;
