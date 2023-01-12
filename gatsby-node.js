const path = require('path');

async function turnCategoriesIntoPages({ graphql, actions }) {
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
async function createAllBlogsPage({ actions }) {
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
async function turnBlogsIntoPages({ graphql, actions }) {
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
  let isMany
  if (Blogs.length > 10) {
    console.log(`creating a page for ${Blogs.lenght} blogs`)
  } else {
    isMany = false
  }
  Blogs.forEach((blog) => {
    if (!isMany) {
      console.log(`creating a page for ${blog.title}`);
    }
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

// export async function createPages(params) {
//   //* Create page functions will go here
//   await Promise.all([turnCategoriesIntoPages(params)]);
//   await Promise.all([turnBlogsIntoPages(params)]);
//   await Promise.all([createAllBlogsPage(params)]);
//   // await Promise.all([turnPodcastsIntoPages(params)]);
// }

exports.createPages = async (params) => {
  await Promise.all([turnCategoriesIntoPages(params)]);
  await Promise.all([turnBlogsIntoPages(params)]);
  await Promise.all([createAllBlogsPage(params)]);
};
