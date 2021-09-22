import faker from "faker";

export const anonymousNameGenerator = ({ walletAddress }) => {
  walletAddress = walletAddress.split(""); // convert to array
  walletAddress.map((c: any) => c.charCodeAt(0)); // convert to unicode
  faker.seed(walletAddress);
  const generatedName = faker.name.findName();
  return generatedName;
};
