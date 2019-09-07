pragma solidity 0.5.11;

contract Counter {

    uint256 k;

    constructor() public {
        k = 0;
    }

    function incrementK() public {
        k += 1;
    }

    function decrementK() public {
        k -= 1;
    }
}
