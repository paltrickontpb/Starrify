var createToken = require( 'github-create-token' );
var star = require( 'github-star-repo' );
var prompt = require('prompt');

var gitUser;
var gitPass;
var gitToken;
var success = 0;

var schema = {
    properties: {
      username: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      password: {
        hidden: true
      }
    }
  };

prompt.start();
prompt.get(schema, function (err, result) {
    
    gitUser = result.username;
    gitPass = result.password;

    var opts = {
        'username': gitUser,
        'password': gitPass,
        'scopes': [ 'public_repo', 'read:org' ],
        'note': 'Stars Asiatik Repositories'
    };

    createToken( opts, tokenCallback );
  });



function tokenCallback( error, results, info ) {
    if ( error ) {
        console.log('Token Already Exists. Please Go to your github settings and delete the token with the name \'Stars Asiatik Repositories\' ');
    }

    if ( results!=null ){
        gitToken = results.token;
        starRepos();
    }
}

function starRepos(){
    var repoString = [
        'Asiatik/Notezy',
        'Asiatik/codezilla',
        'Asiatik/Join_Asiatik'
    ];

    console.log("Please wait for a few moments...")

    for(i=0; i < repoString.length; i++){
        star( repoString[i], {token : gitToken}, starCallback );
    }

}

function starCallback( error, info ) {
    if ( error ) {
        throw new Error( error.message );
    }
    success++;
    if (success == 3) {
        console.log("All Asiatik Repositories have been Starred. Thank you !");
    }
}
 
