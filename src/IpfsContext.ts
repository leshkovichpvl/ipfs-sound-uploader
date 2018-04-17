import { createContext } from 'react';
import * as IpfsAPI from 'ipfs-api';

export const IpfsContext = createContext(
    IpfsAPI({ host: '0.0.0.0', port: '5002' }),
);
