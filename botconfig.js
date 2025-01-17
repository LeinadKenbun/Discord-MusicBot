module.exports = {
  Admins: ["406037745505533962"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "http://media.discordapp.net/attachments/595551516442624019/848915878812450856/elves.png", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  NpUrl: "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL for now playing Icon
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku


//Lavalink
   Lavalink: {
    id: "DisBotlist Lavalink",
    host: "disbotlistlavalink.ml",
    port: 443,
    pass: "LAVA", 
    secure: true, // Set this to true if you're self-hosting lavalink on replit.
    retryDelay: 15000, // Delay for reconnect in ms.
    retryAmount: 10000000, // Retry amout if the lavalink is dead and/or restarting.
  },



  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "2db199f329b74b11916276df4e9924c1", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "9bb3b3ce060e4b1ebe44d5b91ba92c35", //Spotify Client Secret
  },
};


