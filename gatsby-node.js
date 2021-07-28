const path = require('path');

export async function turnCategoriesIntoPages({ graphql, actions }) {
  const template = path.resolve('./src/templates/topics.js');
  const { data } = await graphql(`
    query CategoryQuery {
      category: allSanityCategory {
        nodes {
          title
          id
          slug {
            current
          }
          description
        }
      }
    }
  `);
  const Category = data.category.nodes;
  Category.forEach((i) => {
    console.log(`creating a page for ${i.title}`);
    actions.createPage({
      path: `blog/${i.slug.current}`,
      component: template,
      context: {
        title: i.title,
        slug: i.slug.current,
        description: i.description,
        categoryRegex: `/${i.title}/i`,
      },
    });
  });
}
export async function createAllBlogsPage({ actions }) {
  const template = path.resolve('./src/templates/topics.js');

  console.log(`creating a page for all the blogs`);
  actions.createPage({
    path: `blog/all`,
    component: template,
    context: {
      title: 'All Blogs',
      slug: 'all',
      description: 'Fill this in later',
    },
  });
}
export async function turnBlogsIntoPages({ graphql, actions }) {
  const template = path.resolve('./src/templates/blogtemplate.js');
  const { data } = await graphql(`
    query BlogQuery {
      blogs: allSanityPost {
        nodes {
          title
          slug {
            current
          }
          categories {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const Blogs = data.blogs.nodes;
  Blogs.forEach((blog) => {
    console.log(`creating a page for ${blog.title}`);
    actions.createPage({
      path: `blog/${blog.categories[0].slug.current}/${blog.slug.current}`,
      component: template,
      context: {
        title: blog.title,
        slug: blog.slug.current,
        category: blog.categories[0].title,
      },
    });
  });
}

// export async function turnPodcastsIntoPages({ graphql, actions }) {
//   const template = path.resolve('./src/templates/podcast.js');
//   const { data } = await graphql(`
//     query PodcastQuery {
//       Podcasts: allSanityPodcast {
//         nodes {
//           slug {
//             current
//           }
//           title
//         }
//       }
//     }
//   `);
//   const podcasts = data.Podcasts.nodes;
//   podcasts.forEach((podcast) => {
//     console.log(`creating a page for the ${podcast.title} podcast`);
//     actions.createPage({
//       path: `podcasts/${podcast.slug.current}`,
//       component: template,
//       context: {
//         title: podcast.title,
//         slug: podcast.slug.current,
//       },
//     });
//   });
// }

export async function createPages(params) {
  //* Create page functions will go here
  await Promise.all([turnCategoriesIntoPages(params)]);
  await Promise.all([turnBlogsIntoPages(params)]);
  await Promise.all([createAllBlogsPage(params)]);
  // await Promise.all([turnPodcastsIntoPages(params)]);
}
