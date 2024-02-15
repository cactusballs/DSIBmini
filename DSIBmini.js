const eightBall = document.querySelector(".eightBall")
function generateAnswer() {
  responses = [
          'Second hand smoke kills your pets.<br>Don\'t smoke, it\'s bad', 
           'Smoking makes your breath smell like death. <br>Don\'t smoke, it\'s bad', 
           'Long Haul flights suck, they suck even more when you\'ve a nicotine addiction, quit smoking - go on holiday!<br>Don\'t smoke, it\'s bad', 
           'smoking causes arteriosclerosis, which leads to loss of circulation, this can then lead to sores, ulceration, gangreen and amputation. don\'t let smoking take your legs.<br>Don\'t smoke, it\'s bad', 
           'Know what\'s better than a cig? Living in to your old age and getting senior discounts on literally EVERYTHING.<br>Don\'t smoke, it\'s bad', 
           'Sorry babe but smoking is embarassing, everyone knows it\'s bad for you and people think you\'re stupid for continuing.<br>Don\'t smoke, it\'s bad', 
           'Oh wow, you bought a reusable coffee cup and shopping bag? but you\'re still smoking? Look up the enviromental impacts <a href="https://www.who.int/news/item/31-05-2022-who-raises-alarm-on-tobacco-industry-environmental-impact" target="_blank">here</a> ya fanny.<br>Don\'t smoke, it\'s bad',
           'People love you and you will be loved throughout life, don\'t leave them early or make them watch you die a really painful death.<br>Don\'t smoke, it\'s bad',
           'Just between us, we can admit we\'re vein and with good reason, you\'re a hotty but smoking will steal your looks like a Disney villain. You\'re gonna look old, haggered, have yellow teeth and baggy, baggy skin. Quit smoking, stay hot.<br>Don\'t smoke, it\'s bad',
           'Smoking is paying to die a painful death. You could spend that money on a daily iced latte and still be better off.<br>Don\'t smoke, it\'s bad'
  ];
  response = responses[Math.floor(Math.random() * responses.length)];
  document.getElementById('outputDiv').innerHTML = response;
} 