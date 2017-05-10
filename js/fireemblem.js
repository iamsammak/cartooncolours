export const fireemblemNameToId = (obj, name) => {
  for (let prop in obj ) {
    // console.log(`obj.${prop} = ${obj[prop]}`);
    if (obj[prop][0] === name) {
      return parseInt(prop)
    }
  }
}
