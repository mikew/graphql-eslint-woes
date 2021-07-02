const fragments = [
  gql`
    # incorrect error re: already defined
    fragment postFragment on Post {
      id
    }
  `,
];

const queries = [
  gql`
    ${fragments[0]}
    # incorrect error re: already defined
    query testQuery {
      getPosts {
        # incorrect error re: unknown fragment
        ...postFragment
      }
    }
  `,
];
