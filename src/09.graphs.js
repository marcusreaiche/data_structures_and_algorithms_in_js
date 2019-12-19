/*
Implementation of the Breadth First Search of a graph
*/

function bsf(graphAdjMatrix, root) {
  // Calculates the distance of all graph nodes to the root node
  const graph = graphAdjMatrix; // aliasing
  if(root >= graph.length) {
    throw RangeError(`root must be between 0 and ${graph.length}: ${root} was passed`);
    return;
  }
  const distanceLen = {};
  for(let i = 0; i < graph.length; i++) {
    distanceLen[i] = Infinity; // initialize all distances to Infinity
  }
  distanceLen[root] = 0 // root distance to itself is 0
  const queue = [root];
  while(queue.length) {
    const current = queue.shift();
    // Get all neighbours of current
    const neighbours = [];
    let idx = graph[current].indexOf(1) ;
    while(idx !== -1) {
      neighbours.push(idx);
      idx = graph[current].indexOf(1, idx + 1);
    }

    neighbours.forEach(neigh => {
      if(distanceLen[neigh] === Infinity) {
        // insert neighbour in the queue
        queue.push(neigh);
        // update neigh distance to root
        distanceLen[neigh] = distanceLen[current] + 1;
      }
    });
  }
  return distanceLen;
}
