import { Router } from 'express';

import CreateTicketController from '@src/application/controller/tickets/CreateTicketController';
import FindTicketsController from '@src/application/controller/tickets/FindTicketsController';
import FindTicketByIdController from '@src/application/controller/tickets/FindTicketByIdController';
import FindTicketByUserEmailController from '@src/application/controller/tickets/FindTicketByUserEmailController';
import UpdateTicketController from '@src/application/controller/tickets/UpdateTicketController';
import ApproveTicketController from '../controller/tickets/ApproveTicketController';

const ticket = Router();

ticket.get('/', FindTicketsController.handle);
ticket.get('/id/:id', FindTicketByIdController.handle);
ticket.get('/email/:email', FindTicketByUserEmailController.handle);
ticket.post('/create', CreateTicketController.handle);
ticket.patch('/approve/:id', ApproveTicketController.handle);
ticket.put('/update/:id', UpdateTicketController.handle);

export default ticket;
