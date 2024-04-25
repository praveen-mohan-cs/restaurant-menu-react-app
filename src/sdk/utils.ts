import Contentstack from "contentstack";

export enum Region {
  US = "us",
  EU = "eu",
  AZURE_NA = "azure-na",
  AZURE_EU = "azure-eu",
  GCP_NA = "gcp-na",
}

export const initializeContentstackSdk = () => {
  const {
    REACT_APP_CONTENTSTACK_API_KEY,
    REACT_APP_CONTENTSTACK_DELIVERY_TOKEN,
    REACT_APP_CONTENTSTACK_ENVIRONMENT,
  } = process.env;
  const Stack = Contentstack.Stack({
    api_key: REACT_APP_CONTENTSTACK_API_KEY as string,
    delivery_token: REACT_APP_CONTENTSTACK_DELIVERY_TOKEN as string,
    environment: REACT_APP_CONTENTSTACK_ENVIRONMENT as string,
    region: Region.EU,
  });
  return Stack;
};
