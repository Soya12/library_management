// Copyright (c) 2024, faris and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Library Membership", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Library Membership', {
  from_date: function(frm){
      if(frm.doc.from_date && (frm.doc.to_date<frm.doc.from_date)){
        frm.set_value('from_date',"")
        frappe.throw('To Date should be lesser than From Date')
}
},
  to_date: function(frm){
    if(frm.doc.to_date && (frm.doc.to_date<frm.doc.from_date)){
      frm.set_value('to_date',"")
      frappe.throw({
      title : __('error'),
      indicator : 'red',
      message : __('To Date should be lesser than From Date')
    });

      // do something after value is set


    }
  }
});
