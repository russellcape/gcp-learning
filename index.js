// exports.myFunction = (req, res) => {

//   let message = {
//     msg: "Hello, I am a JSON response!"
//   };

//   res.status(200).send(message);

// };


const fetch = require('node-fetch');


function getUrlForUser(username) {
  return `https://api.github.users/${username}`
}

exports.myFunction = async (req, res) => {
  const username = req.query.username || 'russellcape';

  try {
    const response = await fetch(getUrlForUser(username));
    const responseObject = await response.json();
    const avatarUrl = responseObject.avatar_url;
    res.redirect(avatarUrl);
  } catch(err) {
    res.status(501).send(err.message);
  }
};