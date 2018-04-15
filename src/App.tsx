
import * as React from 'react';
import * as IpfsAPI from 'ipfs-api';



const f = IpfsAPI({host: 'http://app-8d7b3d89-ba18-47b7-934e-29609fe74cc1.cleverapps.io/', port: '5002'});

f.id(function (err, identity) {
    if (err) {
        throw err
    }
    console.log(identity)
})



export class App extends React.Component<any, any> {
    render() {
        return <div>Hello Word</div>
    }
}
