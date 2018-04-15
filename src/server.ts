const IPFS = require('ipfs')


const repoPath = 'ipfs-' + Math.random()
const ipfs = new IPFS({ repo: repoPath })
