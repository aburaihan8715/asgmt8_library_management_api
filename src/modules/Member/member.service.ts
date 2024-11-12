import { Member } from '@prisma/client';
import prisma from '../../config/prisma.config';

// CREATE Member
const createMemberIntoDB = async (payload: Member) => {
  const result = await prisma.member.create({
    data: payload,
  });

  return result;
};

// GET ALL MemberS
const getAllMembersFromDB = async () => {
  const result = await prisma.member.findMany();

  return result;
};

// GET SINGLE Member
const getSingleMemberFromDB = async (memberId: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  return result;
};

// UPDATE Member
const updateMemberIntoDB = async (
  memberId: string,
  payload: Partial<Member>
) => {
  await prisma.member.findFirstOrThrow({
    where: {
      memberId,
    },
  });

  const result = await prisma.member.update({
    where: { memberId },
    data: payload,
  });

  return result;
};

// DELETE Member
const deleteMemberFromDB = async (memberId: string) => {
  await prisma.member.findFirstOrThrow({
    where: {
      memberId,
    },
  });

  const result = await prisma.member.delete({
    where: { memberId },
  });

  return result;
};

export const MemberService = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getSingleMemberFromDB,
  updateMemberIntoDB,
  deleteMemberFromDB,
};
