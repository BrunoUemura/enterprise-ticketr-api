import crypto from 'crypto';

export const users = [
  {
    id: crypto.randomUUID(),
    name: 'john doe',
    email: 'john.doe@gmail.com',
    department_id: 11,
    manager: 'john.doe@gmail.com',
  },
];
