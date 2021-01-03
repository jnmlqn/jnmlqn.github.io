$(function() {
	AOS.init();

	$('#fosterfoodsweb').click(function() {
		let imgs = ``;
		for (var i = 12; i >= 1; i--) {
			imgs += `
				<div class="col-md-4 mb-2">
					<a href="./imgs/fosterfoods${i}.png" target="_blank">
						<img src="./imgs/fosterfoods${i}.png" class="border border-dark pointer" width="100%">
					</a>
				</div>
			`
		}
		showModal(``,`
			<span class="float-right">
				<h4><i class="fa fa-times pointer" onclick="Swal.close()"></i></h4>
			</span>
			<br><br>
			<h4>GALLERY</h4>
			<br>
			<div class="row">
				${imgs}
			<div>
		`, '100%')
	});

	$('#fosterfoodsmobile').click(function() {
		let imgs = ``;
		for (var i = 13; i >= 1; i--) {
			imgs += `
				<div class="col-md-3 mb-2">
					<a href="./imgs/projects/fosterfoods${i}.jpg" target="_blank">
						<img src="./imgs/projects/fosterfoods${i}.jpg" class="border border-dark pointer" width="100%">
					</a>
				</div>
			`
		}
		showModal(``,`
			<span class="float-right">
				<h4><i class="fa fa-times pointer" onclick="Swal.close()"></i></h4>
			</span>
			<br><br>
			<h4>GALLERY</h4>
			<br>
			<div class="row">
				${imgs}
			<div>
		`, 900)
	});

	$('#surelogweb').click(function() {
		let imgs = ``;
		for (var i = 10; i >= 1; i--) {
			imgs += `
				<div class="col-md-4 mb-2">
					<a href="./imgs/surelog${i}.png" target="_blank">
						<img src="./imgs/surelog${i}.png" class="border border-dark pointer" width="100%">
					</a>
				</div>
			`
		}
		showModal(``,`
			<span class="float-right">
				<h4><i class="fa fa-times pointer" onclick="Swal.close()"></i></h4>
			</span>
			<br><br>
			<h4>GALLERY</h4>
			<br>
			<div class="row">
				${imgs}
			<div>
		`, '100%')
	});

	$('#surelogmobile').click(function() {
		let imgs = ``;
		for (var i = 4; i >= 1; i--) {
			imgs += `
				<div class="col-md-3 mb-2">
					<a href="./imgs/projects/surelog${i}.jpg" target="_blank">
						<img src="./imgs/projects/surelog${i}.jpg" class="border border-dark pointer" width="100%">
					</a>
				</div>
			`
		}
		showModal(``,`
			<span class="float-right">
				<h4><i class="fa fa-times pointer" onclick="Swal.close()"></i></h4>
			</span>
			<br><br>
			<h4>GALLERY</h4>
			<br>
			<div class="row">
				${imgs}
			<div>
		`, 900)
	});

	$('#geogreenweb').click(function() {
		let imgs = ``;
		for (var i = 9; i >= 1; i--) {
			imgs += `
				<div class="col-md-6 mb-2">
					<a href="./imgs/geogreen${i}.png" target="_blank">
						<img src="./imgs/geogreen${i}.png" class="border border-dark pointer" width="100%">
					</a>
				</div>
			`
		}
		showModal(``,`
			<span class="float-right">
				<h4><i class="fa fa-times pointer" onclick="Swal.close()"></i></h4>
			</span>
			<br><br>
			<h4>GALLERY</h4>
			<br>
			<div class="row">
				${imgs}
			<div>
		`, '100%')
	});
});