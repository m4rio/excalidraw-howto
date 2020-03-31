import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

function HowToIndex({ data, location }) {
  const posts = data.allMarkdownRemark.edges;
  const title = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={title}>
      <SEO />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3>
              <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
          </div>
        );
      })}
    </Layout>
  );
}

export default HowToIndex;

export const pageQuery = graphql`
  query HowToIndex {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___title] }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
