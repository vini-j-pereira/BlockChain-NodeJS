const BlockChain = require('./blockChain');
const Block = require('./block');

describe('BlockChain', () => {
    let bc;

    beforeEach(() => {
        bc = new BlockChain;
    });

    it('starts with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block', () => {
        const data = 'arquivo.pdf';
        bc.addBlock(data);

        expect(bc.chain[bc.chain.length -1].data).toEqual(data);

    });
});