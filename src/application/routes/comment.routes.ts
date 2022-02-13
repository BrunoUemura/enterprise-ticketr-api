import { Router } from 'express';

import FindCommentsByTicketIdController from '@src/application/controller/comments/FindCommentsByTicketIdController';
import CreateCommentController from '@src/application/controller/comments/CreateCommentController';
import UpdateCommentController from '@src/application/controller/comments/UpdateCommentController';
import DeleteCommentController from '@src/application/controller/comments/DeleteCommentController';

const comment = Router();

comment.get('/id/:id', FindCommentsByTicketIdController.handle);
comment.post('/create/:id', CreateCommentController.handle);
comment.put('/update/:id', UpdateCommentController.handle);
comment.put('/delete/:id', DeleteCommentController.handle);

export default comment;
