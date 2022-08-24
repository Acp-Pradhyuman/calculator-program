// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {
    function add(int256 a, int256 b) public pure returns (int256 result) {
        return (a + b);
    }

    function sub(int256 a, int256 b) public pure returns (int256 result) {
        return (a - b);
    }

    function mul(int256 a, int256 b) public pure returns (int256 result) {
        return (a * b);
    }

    function div(int256 a, int256 b)
        public
        pure
        returns (int256 result, int256 rem)
    {
        return (a / b, a % b);
    }
}
