import { AmbassadorWhereInput } from "./AmbassadorWhereInput";
import { AmbassadorOrderByInput } from "./AmbassadorOrderByInput";

export type AmbassadorFindManyArgs = {
  where?: AmbassadorWhereInput;
  orderBy?: Array<AmbassadorOrderByInput>;
  skip?: number;
  take?: number;
};
