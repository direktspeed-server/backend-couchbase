/*



*/

bkCoubase = bkCoubase || {}

bkCoubase.clusters = bkCoubase.clusters || {}
bkCouchbase.registerCluster = function(name, cluster) {
  // Registers a cluster under bkCoubase.clusters.name
  bkCoubase.clusters.name = cluster
}

bkCoubase.buckets = bkCoubase.buckets || {}
bkCouchbase.registerBucket = function(name, bucket) {
  // Registers a bucket under bkCoubase.buckets.name
  bkCoubase.buckets.name = bucket
}

bkCoubase.ottomanBuckets = bkCoubase.ottomanBuckets || {}
bkCouchbase.registerOttomanBuckets = function(name, bucket) {
  // Registers a bucket under bkCoubase.buckets.name
  bkCoubase.ottomanBuckets[name] = require('ottoman')
  bkCoubase.ottomanBuckets[name].bucket = bucket
}


module.exports = bkCouchbase
