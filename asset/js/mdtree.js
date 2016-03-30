$(document).ready(function(){
  $("#tree").ztree_toc(
    {
    is_auto_number:true,
    documment_selector:".md-body",
    ztreeStyle: {
      width:'260px',
      height:'90%',
      overflow: 'auto',
      position: 'fixed',
      'z-index': 2147483647,
      border: '5px none',
      left: '0px',
      top: '20px'
    }
  }
  );
});
