console.log('js');

var myApp = angular.module('myApp', []);

myApp.controller('ChatController', ChatController);
var socket = io.connect('http://localhost:5678');
function ChatController() {
    console.log('inside of controller');
    var vm = this;

    vm.messagesArray = [];

    vm.sendMessage = function() {
        var data = {
            name:vm.name,
            message:vm.message
            };//end message
            socket.emit('chat', data);
            vm.getMessage();


            vm.messagesArray.push({message:data});
            console.log(vm.messagesArray);
    };//end send message
    vm.getMessage = function() {
        console.log('in get Message');
        socket.on('chat', function(data) {

            return data;
        });


    };//end getMessages



}//emd controller
