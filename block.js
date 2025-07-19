class Block{

    constructor(timestamp, lastHash, hash, data){

        this.timestamp = timestamp;
        this.lastHash =lastHash;
        this.hash = hash;
        this.data =data;

    }

    toString(){
        return `Block = 
                timestamp = ${this.timestamp}
                lastHash = ${this.lastHash}
                hash = ${this.hash}
                data = ${this.data}
        `
    }

    static genesis(){

        return new this('Genesis time', '--------', 'Marx1586', []);

    }

    static mineBlock(lastBlock, data){

        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = 'a-fazer-hash';

        return new this(timestamp, lastHash, hash, data);

    }
}

export default Block;