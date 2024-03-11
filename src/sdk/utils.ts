import Contentstack from "contentstack";

export const initializeContentstackSdk = () => {
  const {
    REACT_APP_ENV_CONTENTSTACK_API_KEY,
    REACT_APP_ENV_CONTENTSTACK_DELIVERY_TOKEN,
    REACT_APP_ENV_CONTENTSTACK_ENVIRONMENT,
  } = process.env;
  const Stack = Contentstack.Stack({
    api_key: REACT_APP_ENV_CONTENTSTACK_API_KEY as string,
    delivery_token: REACT_APP_ENV_CONTENTSTACK_DELIVERY_TOKEN as string,
    environment: REACT_APP_ENV_CONTENTSTACK_ENVIRONMENT as string,
  });
  return Stack;
};
