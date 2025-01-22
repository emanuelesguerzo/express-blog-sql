const postsData = require("../data/posts");

const index = (req, res) => {
  const tags = []; 

  for (let i = 0; i < postsData.length; i++) {
    const postTags = postsData[i].tags;
    for (let j = 0; j < postTags.length; j++) {
      const curTag = postTags[j]; 
      if (!tags.includes(curTag)) {
        tags.push(curTag);
      }
    }
  }

  res.json({
    tags,
    total: tags.length
  });
};

module.exports = {
  index
}