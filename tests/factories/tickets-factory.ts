import faker from "@faker-js/faker";
import { prisma } from "@/config";
import { TicketStatus, TicketType } from "@prisma/client";

export async function createTicketType(params: Partial<TicketType> = {}) {
  return prisma.ticketType.create({
    data: {
      name: faker.name.findName(),
      price: faker.datatype.number(),
      isRemote: params ? params.isRemote : faker.datatype.boolean(),
      includesHotel: params ? params.includesHotel : faker.datatype.boolean(),
    },
  });
}

export async function createTicket(enrollmentId: number, ticketTypeId: number, status: TicketStatus) {
  return prisma.ticket.create({
    data: {
      enrollmentId,
      ticketTypeId,
      status,
    },
  });
}
