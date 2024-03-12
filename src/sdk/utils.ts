import Contentstack from "contentstack";

export const initializeContentstackSdk = () => {
  const {
    CONTENTSTACK_API_KEY,
    CONTENTSTACK_DELIVERY_TOKEN,
    CONTENTSTACK_ENVIRONMENT,
  } = process.env;
  const Stack = Contentstack.Stack({
    api_key: CONTENTSTACK_API_KEY as string,
    delivery_token: CONTENTSTACK_DELIVERY_TOKEN as string,
    environment: CONTENTSTACK_ENVIRONMENT as string,
  });
  return Stack;
};
