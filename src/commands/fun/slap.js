const objects = [
  'a fish',
  'a glove',
  'a shovel',
  'a brick',
  'their bare hands',
  'sock em boppers',
  'a banana',
  'a loaf of bread',
  'their undying love and affection',
  'The Banhammer',
  'a piece of pizza',
  'a cat',
  'a shoe',
  'a keyboard',
  'their face',
  'a carrot',
  'a hammer',
  'a waffle',
  'a dog',
  'The Bible',
  'a bag of Cheetos',
  'an empty beer bottle',
  'a very large cucumber',
  'a towel',
  'the Ace of Spades',
  'something so terrible I can\'t even say it',
  ' a whole pie',
  'a hamster',
  'a bagel'
]

module.exports = {
  meta: {
    help: 'Slap a user.',
    module: 'Fun',
    level: 0,
    timeout: 5,
    alias: ['smack']
  },
  fn: function (msg, suffix) {
    object = objects[Math.floor(Math.random() * objects.length)]
    msg.channel.createMessage(`<@${msg.author.id}> has slapped ${suffix} with ${object}`)
  }
}
