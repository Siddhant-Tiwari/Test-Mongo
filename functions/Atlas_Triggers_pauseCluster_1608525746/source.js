exports = async function() {
  
  // Supply projectID and clusterNames...
  const projectID = '5cc8cdf0553855b89959333e';
  const clusterNames = ['Cluster0'];

  // Get stored credentials...
  const username = context.values.get("AtlasPublicKey");
  const password = context.values.get("AtlasPrivateKey");

  // Set desired state...
  const body = {paused: true};

  var result = "";
  
  clusterNames.forEach(async function (name) {
    result = "Nothing";
    //await context.functions.execute('modifyCluster', username, password, projectID, name, body)
    console.log("Cluster " + name + ": " + EJSON.stringify(result));
    
    if (result.error) { 
      return result;
    }
  })


  return clusterNames.length + " clusters paused"; 
};