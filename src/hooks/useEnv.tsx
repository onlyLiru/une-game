import { LOCAL_ENV, TEST_ENV, PREVIEW_ENV, PRODUCTION_ENV } from "@/const";

function useEnv() {
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV;
  const isLocal = env === LOCAL_ENV;
  const isTest = env === TEST_ENV;
  const isPreview = env === PREVIEW_ENV;
  const isProduction = env === PRODUCTION_ENV;
  console.log(
    "env:",
    env,
    "isLocal:",
    isLocal,
    "isTest:",
    isTest,
    "isPreview:",
    isPreview,
    "isProduction:",
    isProduction
  );

  return { env, isLocal, isTest, isPreview, isProduction };
}

export default useEnv;
