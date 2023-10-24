import { NextRequest, NextResponse } from "next/server";
import { GraphQLClient, gql } from "graphql-request";
import { Comment } from "postcss";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export async function POST(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;
  try {
    const result = await graphQLClient.request(query, variables);

    return new NextResponse(
      JSON.stringify(Comment, { status: 200 }).send(result)
    );
  } catch (error) {
    console.log(error);
  }
}

