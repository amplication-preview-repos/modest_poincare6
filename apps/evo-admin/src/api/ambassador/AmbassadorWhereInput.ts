import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AmbassadorWhereInput = {
  document?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
};
