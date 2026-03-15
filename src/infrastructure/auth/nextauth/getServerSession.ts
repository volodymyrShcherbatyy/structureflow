import { getServerSession as getNextAuthServerSession } from 'next-auth';

import { authOptions } from './authOptions';

export const getServerSession = () => getNextAuthServerSession(authOptions);
