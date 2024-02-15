import { ethers } from "hardhat";

async function main() {
  const baseURL: string = 'ipfs://Qmd8PVuRdzUCd9xFb5VUzAxnUUQdsvzhh8GoMiTqkhbcC3/';

  const blastPandas = await ethers.deployContract("CryptoPandians", [baseURL]);

  await blastPandas.waitForDeployment();

  console.log(
    `CryptoPandians with base url ${baseURL} deployed to ${blastPandas.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
