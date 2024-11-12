import express from 'express';
import { MemberController } from './member.controller';

const router = express.Router();

router.post('/', MemberController.createMember);
router.get('/', MemberController.getAllMembers);
router.get('/:id', MemberController.getSingleMember);
router.patch('/:id', MemberController.updateMember);
router.delete('/:id', MemberController.deleteMember);

export const MemberRoutes = router;
