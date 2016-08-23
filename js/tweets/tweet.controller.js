angular
    .module('app')
    .controller('TweetController', TweetController)

function TweetController() {
    var vm = this;
    var selectedId = -1;

    vm.showReadMode = showReadMode;
    vm.showEditTweet = showEditTweet;
    vm.startEditTweet = startEditTweet;
    vm.editForm = false;
    vm.addTweet = addTweet;
    vm.deleteTweet = deleteTweet;
    vm.editTweet = editTweet;
    vm.newTweet = '';
    vm.editedTweet = '';

    vm.tweets = [
        "I am going to see Justing Timerblake at 9pm",
        "Just finished watching Suicide Squad it sucked!!",
        "Just sat down with friends at a restuarant and I am eating cow tung"
    ];

    function addTweet() {
        vm.tweets.push(vm.newTweet);
        vm.newTweet = '';
    }

    function deleteTweet(index) {
        vm.tweets.splice(index, 1);
    }

    function editTweet(index, tweet) {
        vm.tweets[index] = tweet;
        selectedId = -1;
        vm.editForm = false;
    }

    function startEditTweet(index) {
        selectedId = index;
        vm.editedTweet = vm.tweets[index]
        vm.editForm = true;
    }

    function showReadMode(id, tweet) {
        return vm.tweets[id] == tweet
    }

    function showEditTweet(index) {
        return vm.editForm && selectedId == index
    }

}

array = [1,2,3,4,5]
array[3] === 4
