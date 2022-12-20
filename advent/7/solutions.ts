// Part 1
const sumDirSizes = (input:string) => {
  const instructions = input.split('\n');
  const cleanInstructions = instructions.filter((i) => i.slice(2, 4) !== 'ls' && i.slice(0, 3) !== 'dir');

  const allDirs:any = { '/': { size: 0 } };
  const currentDir:string[] =['/'];
  cleanInstructions.forEach((instruction) => {
    const { 0: first, 2: third} = instruction.split(' ');
    if(first === '$') {        
      if(third === '..') currentDir.pop();
      else {
        currentDir.push(third);
        const fullPath = currentDir.join('/');
        allDirs[fullPath] = {};
        allDirs[fullPath].size = 0;
      }
    }
    else {
      const fileSize = parseInt(first);
      const temp:any[] = [];        
      currentDir.forEach((dir) => {
        temp.push(dir);            
        const temp2 = temp.join('/');
        allDirs[temp2].size += fileSize;    
      });
    }
  });

  let sum=0;
  for(const dir in allDirs) if(allDirs[dir].size <= 100000) sum += allDirs[dir].size; 
  return sum;
}

// Part 2
const getSizeOfDirToDelete = (input:string) => {
  const instructions = input.split('\n');
  const cleanInstructions = instructions.filter((i) => i.slice(2, 4) !== 'ls' && i.slice(0, 3) !== 'dir');

  const allDirs:any = { '/': { size: 0 } };
  const currentDir=['/'];
  cleanInstructions.forEach((instruction) => {
    const { 0: first, 2: third} = instruction.split(' ');
    if(first === '$') {        
      if(third === '..') currentDir.pop();
      else {
        currentDir.push(third);
        const fullPath = currentDir.join('/');
        allDirs[fullPath] = {};
        allDirs[fullPath].size = 0;
      }
    }
    else {
      const fileSize=parseInt(first);
      const temp:string[] = [];        
      currentDir.forEach((dir) => {
        temp.push(dir);            
        const temp2 = temp.join('/');
        allDirs[temp2].size += fileSize;    
      });
    }
  });

  const sizeToDelete = allDirs['/'].size - 70000000 + 30000000;
  let closestSize=70000000;
  for(const dir in allDirs) {
    if(allDirs[dir].size > sizeToDelete && allDirs[dir].size < closestSize) closestSize = allDirs[dir].size;
  }
  return closestSize;
}

module.exports = { sumDirSizes, getSizeOfDirToDelete };
