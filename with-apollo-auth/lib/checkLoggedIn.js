import gql from "graphql-tag";

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query getUser {
          user {
            id
            name
          }
        }
      `
    })
    .then(({ data }) => {
      console.log("GQL:", data);
      return { loggedInUser: data };
    })
    .catch(() => {
      // Fail gracefully
      return { loggedInUser: {} };
    });
