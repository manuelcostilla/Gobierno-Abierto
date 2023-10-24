import { AcordeonDeLicitaciones } from "./components/Licitaciones";
import { licitaciones } from "./data/InfoLicitaciones";

const Licitaciones = () => {
  return (
    <>
      <AcordeonDeLicitaciones data={licitaciones} />
    </>
  );
};

export default Licitaciones;
