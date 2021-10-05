// type alias
type Uid = number | string | undefined;

function logDetails(uid: Uid, item: string){
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: string){
  console.log(`An user with ${uid} has a name as ${user}`);
}

logDetails(123, 'object');
logDetails('123', 'object');

logInfo(123, 'object');
logInfo('123', 'object');

type Plataform = 'Windows' | 'Linux' | 'Mac Os' ;

function renderPlataform(plataform: Plataform){
  return plataform;
}
