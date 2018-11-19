var createToken = require( 'github-create-token' );
var star = require( 'github-star-repo' );
//Prompt Package

var gitUser;
var gitPass;
var gitToken;

var opts = {
    'username': gitUser,
    'password': gitPass,
    'scopes': [ 'public_repo', 'read:org' ],
    'note': 'Stars Asiatik Repositories'
};

createToken( opts, tokenCallback );

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
    var repoString;
    star( repoString, {token : gitToken}, starCallback );
}

function starCallback( error, info ) {
    if ( error ) {
        throw new Error( error.message );
    }
    console.log( 'Success!' );
}
 
