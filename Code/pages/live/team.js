function printTeamName(name){
  console.table(name)
  return name;
}

function printRankList(list){
  console.table(list)
  return list;
}

module.exports.printTeamName = printTeamName;
module.exports.printRankList = printRankList;