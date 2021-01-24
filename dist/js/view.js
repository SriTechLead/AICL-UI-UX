ale
$('.collapse').on('show.bs.collapse', function () {
    var groupId = $('#expander').attr('data-group-id');
    console.log(groupId);
    if (groupId) {
      $('#grandparentIcon').html('v');
    }
  });
  
  $('.collapse').on('hide.bs.collapse', function () {
    var groupId = $('#expander').attr('data-group-id');
    console.log(groupId);
    if (groupId) {
      $('#' + groupId + 'Icon').html('>');
    }
  });
  