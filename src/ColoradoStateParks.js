import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees as parkTrees, wildlife as parkWildlife} from "./parks/RockyMountain"

function ColoradoStateParks() {
  <div>
  howManyParks(); 
<parkTrees/>
<parkWildlife/>
<MesaVerde/>
</div>
  return <h1>Colorado State Parks!</h1>;
}
