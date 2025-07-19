import Block from "./block.js";

const block = new Block('666', '123654789654', '2365899987999', '1000');
console.log(block.toString());
console.log(Block.genesis().toString());

const primeiroBloco = Block.mineBlock(Block.genesis(), '$10.000');
console.log(primeiroBloco.toString());


