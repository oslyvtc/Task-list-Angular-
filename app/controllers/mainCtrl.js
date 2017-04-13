angular.module('Controllers',['taskService'])
	.controller('mainCtrl', mainCtrl)
	mainCtrl.$inject = ['myService'];

function mainCtrl(myService) {

	this.tasks = myService.tasks.userTasks;
	this.userName = myService.tasks.user;
	this.addTask = myService.addTask;
	this.removeTask = myService.removeTask;
	this.showEditBlock = myService.showEditBlock;
	this.editTask = myService.editTask;

};