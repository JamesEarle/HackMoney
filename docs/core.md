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

The angle that this does not cover is, in a royalty payment scenario, the payment was initially going to a single token holder. Now this needs a percentage needs to go to each holder of the chunks.
