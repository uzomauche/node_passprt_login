// module.exports = {
//     MongoURI: 'mongodb+srv//root-user:london3495@project-cluster1.mtge9.mongodb.net/root-user?retryWrites=true&w=majority'
// }

dbPassword = 'mongodb+srv://root-user:'+ encodeURIComponent('london3495') + '@project-cluster1.mtge9.mongodb.net/root-user?retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};
