import { defineConfig } from 'vite'

export default defineConfig({
    // If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/
    // Set base to '/<REPO_NAME>/'
    // base: '/nate/', 
    base: './', // Using relative paths is often safer for simple deployments
})
