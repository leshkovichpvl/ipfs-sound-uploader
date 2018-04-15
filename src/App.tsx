
import * as React from 'react';
import * as IpfsAPI from 'ipfs-api';



const f = IpfsAPI({host: 'localhost', port: '5002'});

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
