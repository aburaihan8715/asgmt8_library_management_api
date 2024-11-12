import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import responseNotFoundData from '../../utils/responseNotFoundData';
import { MemberService } from './member.service';

// CREATE Member
const createMember = catchAsync(async (req, res) => {
  const newMember = await MemberService.createMemberIntoDB(req.body);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Member created successfully!',
    data: newMember,
  });
});

// GET ALL MemberS
const getAllMembers = catchAsync(async (req, res) => {
  const members = await MemberService.getAllMembersFromDB();

  if (!members || members.length < 1) {
    return responseNotFoundData(res, 'No Members found!');
  }

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Members retrieved successfully!',
    data: members,
  });
});

// GET SINGLE Member
const getSingleMember = catchAsync(async (req, res) => {
  const memberId = req.params.id;

  const member = await MemberService.getSingleMemberFromDB(memberId);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Member retrieved successfully!',
    data: member,
  });
});

// UPDATE Member
const updateMember = catchAsync(async (req, res) => {
  const memberId = req.params.id;
  const data = req.body;

  const updatedMember = await MemberService.updateMemberIntoDB(
    memberId,
    data
  );

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Member updated successfully!',
    data: updatedMember,
  });
});

// DELETE Member
const deleteMember = catchAsync(async (req, res) => {
  const memberId = req.params.id;

  await MemberService.deleteMemberFromDB(memberId);
  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Member successfully deleted!',
  });
});

export const MemberController = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
