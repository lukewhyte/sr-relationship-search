import dotenv from 'dotenv'
import { CodegenConfig } from "@graphql-codegen/cli";

dotenv.config()

const config: CodegenConfig = {
  schema: process.env.API_ENDPOINT,
  documents: ["src/protocol-api/*.ts"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;