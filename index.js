
function distanceFromHqInBlocks(startBlock) {
  const hqBlock = 42;
  return Math.abs(startBlock - hqBlock); 
}


function distanceFromHqInFeet(startBlock) {
  const blocks = distanceFromHqInBlocks(startBlock);
  return blocks * 264;
}


function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceBetween =  Math.abs(endBlock-startBlock);
    return distanceBetween * 264;
  }


function calculatesFarePrice(startBlock, endBlock) {
    const distanceBetween = distanceTravelledInFeet(startBlock, endBlock) 
 
  if(distanceBetween <= 400){
      return 0;
  }
  else if(distanceBetween > 400 && distanceBetween <=2000){
      return (distanceBetween - 400)* 0.02;
  }
  else if(distanceBetween > 2000 && distanceBetween <=2500){
      return 25;
  }else{
      return 'cannot travel that far';
  }

}

distanceFromHqInBlocks(43); 
distanceFromHqInBlocks(50); 
distanceFromHqInBlocks(34);

distanceFromHqInFeet(43); 
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);


distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);