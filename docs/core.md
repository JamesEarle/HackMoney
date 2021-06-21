# Core project for HackMoney

The goal of this project is to build an application that allows tokenization of a ERC-721 token. In the current world, a ERC-721 token (NFT) can be minted, transferred and burned. When thinking about workloads such as a royalty payout scenario, it would be interesting to essentially break an NFT into a few parts, which carry weight in terms of their relative chunk size of the NFT. This could be used to payout many holders of the pieces of the NFT, not just a single owner.

# Existing standards

The existing EIPS/ERC standards were reviewed and relevant ones listed [here](background.md). The assembly of ERC-721 to a single ERC-721 is interesting, as this is the exact opposite of the work for this project.

# Possible Approaches

## Approach 1

Consider a single ERC-721 token, a contract could be created that would accept:

- Proof of ownership of the single ERc-721 token

- Number of chunks to break the single token into

This contract would create the new ERC-721 tokens and lock up the single ERC-721 token, and only when all chunks are brought together, could they be a single token again. It could be that case that this would never happen.

The angle that this does not cover is, in a royalty payment scenario, the payment was initially going to a single token holder. Now this needs a percentage needs to go to each holder of the chunks. Possibly, the core token definition could be augmented to distribute the payment. For a simple example:

1.  A single ERC-721 token will be broken into 2 tokens, each holding 50% of the total value of the core.

2.  Two new tokens are minted, with the appropriate owners.

3.  The single, origin token, is then locked from transferring by a mechanism that requires all owners of the child tokens (new ones), to unlock.

Using ERC-1155, the operation can be batched.

## Approach 2

Consider a single ERC-721 token, another option would be to use the same functions as Approach 1 above, with the only change that we child tokens are minted, the parent token is burned (destroyed). Possibly, [ERC-389](https://eips.ethereum.org/EIPS/eip-3589) could be used to re-assemble the child tokens to the parent, with the approval of the child token owners.
