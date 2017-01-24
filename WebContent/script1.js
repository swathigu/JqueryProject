$(document).ready(
		function() {
			$("#name").keyup(function() {
				$("#txt1").text($("#name").val() + '\n');
				// $("#resume").append($("#name").val() + '\n');
			});
			$("#position").keyup(function() {
				$("#txt2").text($("#position").val() + '\n');
			});
			$("#location").keyup(function() {
				$("#txt3").text($("#location").val() + '\n');
			});
			$("#desc").keyup(function() {
				$("#txt4").text($("#desc").val() + '\n');
			});

			$('li#exp').click(function() {
				$("#frm1").css("display", "none");
				$("#frm2").css("display", "inline");
				$("#frm3").css("display", "none");
			});

			$('li#edu').click(function() {
				$("#frm1").css("display", "none");
				$("#frm2").css("display", "none");
				$("#frm3").css("display", "inline");
			});

			$("#newExp").click(
					function() { // generates the Cloned div when user adds new experience

						var num = $('.clonedExpDiv').length;
						if ($('#workdetails' + num).css('display') == 'none') {
							$("#experiencediv" + num).css("display", "inline");
						} else {
							var newNum = new Number(num + 1),
								newElem = $('#experiencediv' + num).clone(true).attr(
									'id', 'experiencediv' + newNum);
							newElem.find('.exp-pos').attr('id',
									'position' + newNum).val('');
							newElem.find('.exp-comp').attr('id',
									'company' + newNum).val('');
							newElem.find('.exp-month').attr('id',
									'month' + newNum).val('');
							newElem.find('.exp-year').attr('id',
									'year' + newNum).val('');
							newElem.find('.exp-loc').attr('id', 'loc' + newNum)
									.val('');
							newElem.find('.exp-desc').attr('id',
									'desc' + newNum).val('');
							newElem.find('.done').attr('id',
									'donebtn-' + newNum);// .val('');
							newElem.find('.cancel').attr('id',
									'cancel-' + newNum);

							console.log(newElem);
							$('#experiencediv' + num).after(newElem);
							$("#newExpButton").css("display", "none");
							$("#workdetailsDiv").css("display", "none");
							$("#experiencediv" + num).css("display", "none");
							$("#experiencediv" + newNum).css("display",
									"inline");
						}
					});
			$(".done").click(
					function(e) {
						e.preventDefault();
						var num = $('.clonedWorkDetailsDiv').length;
						var edit = $('.done').hasClass('edit');
						var num1 = this.id.split('-')[1];
						if (edit === false) {
							if (num > 1 || num1 > 1) {
								// alert('inside');
								var newNum = new Number(num + 1);
								var newElem = $('#workdetails' + num).clone(
										true)
										.attr('id', 'workdetails' + newNum);
								newElem.find('span#workinfo' + num).attr('id',
										'workinfo' + newNum).empty();
								newElem.find('span#workinfoedit-' + num).attr(
										'id', 'workinfoedit-' + newNum);
								newElem.find('span#workinfodel-' + num).attr(
										'id', 'workinfodel-' + newNum);

								$('#workdetails' + num).after(newElem);
								$('span#workinfo' + newNum).text(
										$("#position" + newNum).val());
								$("#experiencediv" + newNum).css("display",
										"none");

							} else {
								$('span#workinfo1').text(
										$("#position1").val());
								$("#experiencediv1").css("display", "none");
							}
						} else {
							$('span#workinfo' + num1).val('').text(
									$("#position" + num1).val());
							$("#experiencediv" + num1).css("display", "none");
						}
						$("#newExpButton").css("display", "inline");
						$("#workdetailsDiv").css("display", "inline");
						$( "#resume" ).append( "<pre id=prework" + num1 +"> </pre>" );
						$("input", $('#experiencediv' + num1)).each(function() {
							var str = $(this).val();
							if (str != '') {
								$("#prework"+num1).append(str + '\n');
							}
						});
						$("textarea", $('#experiencediv' + num1)).each(
								function() {
									$("#prework"+num1).append($(this).val() + '\n');
								});
						if ($('#workdetails' + num).css('display') == 'none') {
									$("#workdetails" + num).css("display", "block");
								} 
					});
			
			$("#newEdu").click(
					function() { // generates the Cloned div when user adds
						// new experience

						var num = $('.clonedEduDiv').length;
						if ($('#edudetails' + num).css('display') == 'none') {
							$("#educationdiv" + num).css("display", "inline");
						} else {
							var newNum = new Number(num + 1), newElem = $(
									'#educationdiv' + num).clone(true).attr(
									'id', 'educationdiv' + newNum);
							newElem.find('.edu-school').attr('id',
									'school' + newNum).val('');
							newElem.find('.edu-startyear').attr('id',
									'startyear' + newNum).val('');
							newElem.find('.edu-endyear').attr('id',
									'endyear' + newNum).val('');
							newElem.find('.edu-currentattend').attr('id',
									'currentattend' + newNum).prop("checked",false);
							newElem.find('.edu-achv').attr('id', 'achievement' + newNum)
									.val('');
							newElem.find('.done').attr('id',
									'edudonebtn-' + newNum);// .val('');
							newElem.find('.cancel').attr('id',
									'educancel-' + newNum);

							console.log(newElem);
							$('#educationdiv' + num).after(newElem);
							$("#newEduButton").css("display", "none");
							$("#edudetailsDiv").css("display", "none");
							$("#educationdiv" + num).css("display", "none");
							$("#educationdiv" + newNum).css("display",
									"inline");
						}
					});
			$(".edudone").click(
					function(e) {
						e.preventDefault();
						var num = $('.clonedEduDetailsDiv').length;
						var edit = $('.edudone').hasClass('edit');
						var num1 = this.id.split('-')[1];
						if (edit === false) {
							if (num > 1 || num1 > 1) {
								var newNum = new Number(num + 1);
								var newElem = $('#edudetails' + num).clone(
										true)
										.attr('id', 'edudetails' + newNum);
								newElem.find('span#eduinfo' + num).attr('id',
										'workinfo' + newNum).empty();
								newElem.find('span#eduinfoedit-' + num).attr(
										'id', 'eduinfoedit-' + newNum);
								newElem.find('span#eduinfodel-' + num).attr(
										'id', 'eduinfodel-' + newNum);

								$('#edudetails' + num).after(newElem);
								$('span#eduinfo' + newNum).text(
										$("#school" + newNum).val());
								$("#educationdiv" + newNum).css("display",
										"none");

							} else {
								$('span#eduinfo1').text(
										$("#school1").val());
								$("#educationdiv1").css("display", "none");
							}
						} else {
							$('span#eduinfo' + num1).val('').text(
									$("#school" + num1).val());
							$("#educationdiv" + num1).css("display", "none");
						}
						$("#newEduButton").css("display", "inline");
						$("#edudetailsDiv").css("display", "inline");
						$( "#resume" ).append( "<pre id=preedu" + num1 +"> </pre>" );
						$("input", $('#educationdiv' + num1)).each(function() {
							var str = $(this).val();
							if (str != '') {
								$("#preedu"+num1).append(str + '\n');
							}
						});
						$("textarea", $('#educationdiv' + num1)).each(
								function() {
									$("#preedu"+num1).append($(this).val() + '\n');
								});
						if ($('#edudetails' + num).css('display') == 'none') {
									$("#edudetails" + num).css("display", "block");
								} 
					});

			$(".cancel").click(function(e){
				e.preventDefault();
				//$(this).parent().css("display", "none");
				//$("#frm1").css("display", "inline");
				
				
			});

			$('span.glyphicon-trash').on('click', function() {
				var obj = this.id.split('-');
			var num= obj[1];
				if (num == 1) {
					$(this).closest('div').css("display", "none");
					$(this).empty();
					$('this').trigger("reset");
				} else {
					if( obj[0]=="workinfodel"){
						$("#frm2").find('#experiencediv' + num).remove();
						$(this).closest('div').remove();
						$("#prework"+num).remove();
					}else{
						$("#frm3").find('#educationdiv' + num).remove();
						$(this).closest('div').remove();
						
					}
				}
				if( obj[0]=="workinfodel"){
					$("#prework"+num).remove();
				}else{
					$("#preedu"+num).remove();
				}
			});

			$('span.glyphicon-pencil').on('click', function() {
				var obj = this.id.split('-');
				var num= obj[1];
				$("#newExpButton").css("display", "none");
				if( obj[0]=="workinfoedit"){
					$('#workdetailsDiv').css("display", "none");
					$('#experiencediv' + num).css("display", "inline");
					$('#donebtn-' + num).addClass("edit");
				}else{
					$('#edudetailsDiv').css("display", "none");
					$('#educationdiv' + num).css("display", "inline");
					$('#edudonebtn--' + num).addClass("edit");
				}

			});

			// Generates json
			$('#finish').on(
					'click',
					function() {
						var o = {};
						$('input', $('#frm1')).each(function() {
							var obj = $(this);
							o[obj.attr('id')] = obj.val();
						});
						var tmp = [];
						$('.clonedExpDiv', $('#frm2')).each(
								function() {
									var tmp1 = {};
									var obj = $(this);
									$('input', obj).each(
											function() {
												var obj1 = $(this);
												tmp1[obj1.attr('id')] = obj1
														.val();
												console.log(obj1.attr('id')
														+ "     "
														+ obj1.attr('class')
														+ "   " + obj1.val());
											})
									tmp.push(tmp1);
								});
						o["Work"] = tmp;
						var tmp2 = [];
						$('.clonedEduDiv', $('#frm3')).each(
								function() {
									var tmp3 = {};
									var obj = $(this);
									$('input', obj).each(
											function() {
												var obj1 = $(this);
												tmp3[obj1.attr('id')] = obj1
														.val();
												console.log(obj1.attr('id')
														+ "     "
														+ obj1.attr('class')
														+ "   " + obj1.val());
											})
									tmp2.push(tmp3);
								});
						o["Education"] = tmp2;
						console.log(JSON.stringify(o));
					})
		});
