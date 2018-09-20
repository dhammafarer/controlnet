const pages = [
  {
    path: /^\/en/,
    layout: 'index-en',
  },
  {
    path: /^\/zh/,
    layout: 'index-en',
  },
];
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return  new Promise((resolve, reject)=> {
    const match = pages.find(p => page.path.match(p.path));
    if (match) page.layout = match.layout;

    resolve();
  });
};
