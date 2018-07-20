import gql from "graphql-tag";

const GetStore = gql`
    {
        getStore {
            name
        }
    }
`;

export default {GetStore};