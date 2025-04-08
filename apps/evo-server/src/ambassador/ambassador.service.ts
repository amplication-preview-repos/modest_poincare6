import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AmbassadorServiceBase } from "./base/ambassador.service.base";

@Injectable()
export class AmbassadorService extends AmbassadorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
