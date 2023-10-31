# ERC-5725 Interface

The Solidity interface of ERC-5725.

## Install

```bash
npm install @erc-5725/interface
```

```bash
yarn add @erc-5725/interface
```

## Usage

With Solidity:

```js
// SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.0;

import {IERC5725} from "@erc-5725/interface/IERC5725.sol";

contract ERC5725 is IERC5725, ERC721 {
    ...
}
```

With Ethers:

```js
const { IERC5725_Artifact } = require('@erc-5725/interface');
const IERC5725 = new ethers.utils.Interface(IERC5725_Artifact.abi);
```
