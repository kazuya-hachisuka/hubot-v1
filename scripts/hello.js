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
};