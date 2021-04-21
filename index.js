const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

const dbd = require("dbd.js")
 require('dotenv').config();
const bot = new dbd.Bot({
token: "token", 
prefix: ['$getServerVar[prefix]',], //<- Change whatever with your prefix//
fetchInvites : true
})

bot.status({
  text: "AleBot el mas wapo",
  type: "WATCHING",
  time: 4
})


bot.status({
  text: "Viendote a ti bb",
  type: "WATCHING",
  time: 4
})



bot.variables({
prefix: "ab!"
})



 bot.command({
 name: "prefix",
 code: `$setServerVar[prefix;$noMentionMessage[1]]
Ahora el prefix de este server es \`$noMentionMessage[1]\`
$onlyIf[$charCount[$noMentionMessage[1]]<=3;Maximo 3 caracteres.]
$onlyPerms[manageserver;Ocupas el permiso \`Administrar servidor\` para utilizar este comando, lo siento D:]`
})
