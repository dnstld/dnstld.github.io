import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title,
        description,
        image
      }
    }
  }
`;

const Seo = ({
  // eslint-disable-next-line react/prop-types
  description, keywords, title, image, url, author,
}) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const metaDescription = description || data.site.siteMetadata.description;
      const metaTitle = title || data.site.siteMetadata.title;
      const metaImage = image || data.site.siteMetadata.image;
      const metaUrl = url || data.site.siteMetadata.url;
      const metaAuthor = author || data.site.siteMetadata.author;
      const metaKeywords = keywords || ['denis toledo portfolio', 'denis toledo projects'];

      return (
        <Helmet
          title={metaTitle}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            {
              name: 'author',
              content: metaTitle,
            },
            {
              property: 'og:title',
              content: metaTitle,
            },
            {
              name: 'og:description',
              content: metaDescription,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              name: 'og:image',
              content: metaImage,
            },
            {
              name: 'og:url',
              content: metaUrl,
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:site',
              content: metaAuthor,
            },
            {
              name: 'twitter:creator',
              content: metaAuthor,
            },
            {
              name: 'twitter:url',
              content: metaUrl,
            },
            {
              name: 'twitter:title',
              content: metaTitle,
            },
            {
              name: 'twitter:description',
              content: metaDescription,
            },
            {
              name: 'twitter:image',
              content: metaImage,
            },
          ].concat(
            metaKeywords && metaKeywords.length > 0 ? {
              name: 'keywords',
              content: metaKeywords.join(', '),
            } : [],
          )}
        />
      );
    }}
  />
);

export default Seo;
