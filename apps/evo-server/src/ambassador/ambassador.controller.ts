import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AmbassadorService } from "./ambassador.service";
import { AmbassadorControllerBase } from "./base/ambassador.controller.base";

@swagger.ApiTags("ambassadors")
@common.Controller("ambassadors")
export class AmbassadorController extends AmbassadorControllerBase {
  constructor(protected readonly service: AmbassadorService) {
    super(service);
  }
}
