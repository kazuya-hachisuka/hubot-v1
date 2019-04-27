'use strict';
module.exports = (robot) => {
  robot.hear(/hello>/i, (msg) => {
    const username = msg.message.user.name;
    msg.send('Hello, ' + username);
  });

  robot.hear(/song>/i, (msg) => {
    const username = msg.message.user.name;
    const lyric = "Hu-bot!! \n みんなのHu-bot!! \n いつでもHu-bot!!! \n オイラはHu-bot!!! \n"
    msg.send(lyric + username);
  });

  robot.hear(/yasushi>/i, (msg) => {
    const yasushiwords = ['怒るでしかし!!','しょーみなはなし!!!','メガネ、メガネ','散れっ!!!'];
    const yasushiWord = yasushiwords[Math.floor(Math.random() * yasushiwords.length)];
    msg.send(yasushiWord);
  });
};