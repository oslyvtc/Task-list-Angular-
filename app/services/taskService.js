angular.module('taskService',[])
	.factory('myService', myService)

function myService() {

	var tasks = {
		user: 'Oleg',
		userTasks: [
			{
				name: 'Learn JavaScript',
				done: false,
				editBlock: false
			},
			{
				name: 'Learn Angular',
				done: false,
				editBlock: false
			},
			{
				name: 'Go to sleep',
				done: false,
				editBlock: false
			},
			{
				name: 'Drink coffe',
				done: false,
				editBlock: false
			}
		]
	};

	function addTask(taskName) {

		tasks.userTasks.push({
			name: taskName,
			done: false,
			editBlock: false
		})

	};

	function removeTask(key) {
     
		tasks.userTasks.splice(key, 1)

  };

  function showEditBlock(key) {

 		tasks.userTasks[key].editBlock = !tasks.userTasks[key].editBlock
 	
 	};

  function editTask(key, newTaskName) {

  	tasks.userTasks[key].name = newTaskName;
  	showEditBlock(key);

  };

	return {
		tasks: tasks,
		addTask: addTask,
		removeTask: removeTask,
		showEditBlock: showEditBlock,
		editTask: editTask
	};

};
