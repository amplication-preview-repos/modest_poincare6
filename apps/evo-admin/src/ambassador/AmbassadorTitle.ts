import { Ambassador as TAmbassador } from "../api/ambassador/Ambassador";

export const AMBASSADOR_TITLE_FIELD = "document";

export const AmbassadorTitle = (record: TAmbassador): string => {
  return record.document?.toString() || String(record.id);
};
