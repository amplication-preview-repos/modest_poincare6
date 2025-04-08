import { Module } from "@nestjs/common";
import { AmbassadorModuleBase } from "./base/ambassador.module.base";
import { AmbassadorService } from "./ambassador.service";
import { AmbassadorController } from "./ambassador.controller";
import { AmbassadorResolver } from "./ambassador.resolver";

@Module({
  imports: [AmbassadorModuleBase],
  controllers: [AmbassadorController],
  providers: [AmbassadorService, AmbassadorResolver],
  exports: [AmbassadorService],
})
export class AmbassadorModule {}
