export { };

declare global {
    namespace NodeJS{
        interface ProcessEnv extends NodeJS.ProcessEnv{
            EXPO_PUBLIC_API_URL: string
        }
    }
}