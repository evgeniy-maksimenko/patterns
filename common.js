var people = (function() {
	var people = ['Will', 'Lora'];
	var $el = $("#peopleModule");
	var $ul = $el.find('ul');
	var $input = $el.find('input');
	var $button = $el.find('button');
	var template = $el.find("#people-template").html();

	$button.on('click', addPerson);
	$ul.delegate('i.del', 'click', deletePerson);

	_render();

	function _render() {
		$ul.html(Mustache.render(template, {
			people: people
		}));
	}

	function addPerson(val) {
		var name = (typeof val === "string") ? val : $input.val();
		people.push(name);
		_render();
		$input.val('');
	}

	function deletePerson(e) {
		var i;
		if (typeof e === "number") {
			i = e;
		} else {
			var $remove = $(e.target).closest('li');
			i = $ul.find('li').index($remove);
		}
		people.splice(i, 1);
		_render();
	}

	return {
		addPerson: addPerson,
		deletePerson: deletePerson
	};
})();