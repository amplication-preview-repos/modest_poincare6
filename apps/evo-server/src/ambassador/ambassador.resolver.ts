import * as graphql from "@nestjs/graphql";
import { AmbassadorResolverBase } from "./base/ambassador.resolver.base";
import { Ambassador } from "./base/Ambassador";
import { AmbassadorService } from "./ambassador.service";

@graphql.Resolver(() => Ambassador)
export class AmbassadorResolver extends AmbassadorResolverBase {
  constructor(protected readonly service: AmbassadorService) {
    super(service);
  }
}
