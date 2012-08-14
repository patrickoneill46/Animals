/* 
The shared directory contains JavaScript files which can be accessed from both the client and the cloud.

Shared files can be included from client-side html files using a standard script tag as if they were in 
the same directory as the client side file - e.g.:
<script src="config.js" type="text/javascript"></script>

Shared files are automatically loaded and made available to the cloud script executor. This means that any
functions of variables contained in files within the shared directory can be accessed as if they were in the
cloud directory.
*/

/* 
This file - config.js - is used to demonstrate the best practice method for allowing configuration information
to be bundled with the app when it is built, but also allowing the latest version of the configuration to be 
retrieved by the app from the cloud on start up.
*/

var config = {
  param1 : 'Initial value',
  param2 : true
};

var animalData = [
  {
    name: 'Pepsi',
    type: 'dog',
    tag: 'pepsi',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Nullam ultricies justo nulla, at imperdiet elit.' +
    'Curabitur commodo varius justo. '
  },
  
  {
    name: 'Dingo',
    type: 'dog',
    tag: 'dingo',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Nullam ultricies justo nulla, at imperdiet elit.' +
    'Curabitur commodo varius justo. '
  },
  
  {
    name: 'Charlie',
    type: 'cat',
    tag: 'charlie',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Nullam ultricies justo nulla, at imperdiet elit.' +
    'Curabitur commodo varius justo. '
  },
  {
    name: 'Babe',
    type: 'farm',
    tag: 'babe',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Nullam ultricies justo nulla, at imperdiet elit.' +
    'Curabitur commodo varius justo. '
  },
  {
    name: 'Gordon',
    type: 'reptile',
    tag: 'gordon',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Nullam ultricies justo nulla, at imperdiet elit.' +
    'Curabitur commodo varius justo. '
  },
  {
    name: 'Milo',
    type: 'furry',
    tag: 'milo',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Nullam ultricies justo nulla, at imperdiet elit.' +
    'Curabitur commodo varius justo. '
  },
  {
    name: 'She\'s the fastest',
    type: 'horse',
    tag: 'shesthefastest',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Nullam ultricies justo nulla, at imperdiet elit.' +
    'Curabitur commodo varius justo. '
  }
];

var animals =  {
  
  cats: [
  ],
  
  dogs: [
  ],
  
  farmyard: [
  ],
  
  reptiles: [
  ],
  
  furries: [
  ],
  
  horses: [
  ]
  
    
};

var news = {
  
};

exports.animalData = animalData;
