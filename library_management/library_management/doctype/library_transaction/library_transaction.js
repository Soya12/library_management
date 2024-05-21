// Copyright (c) 2024, faris and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Library transaction", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Library Transaction', {

  refresh: function(frm) {

   frm.add_custom_button('Fine', () => {
    d = new frappe.ui.Dialog({
    title: 'Pay Fine',
    fields: [
      {
          label: 'Amount',
          fieldname: 'amount',
          fieldtype: 'Currency'
      },
      {
          label: 'Date',
          fieldname: 'date',
          fieldtype: 'Date'
      }
    ],
      size: 'small', // small, large, extra-large
      primary_action_label: 'Paid',
      primary_action(values) {
          console.log(values);
          d.hide();
      }
    });

    d.show();

  })
},


    has_fine: function(frm){
        add_create_fine_button(frm);
    },
    date:function(frm){
      frm.call("check_fine_status").then(r => {
        frm.set_value("has_fine", r.message)
        frm.refresh_fields()
      })
      add_create_fine_button(frm)
    }

});
function remove_field_name(frm){
  if(frm.doc.type =='Issue'){
    frm.remove_field_name('Has Fine')
  }
}

function add_create_fine_button(frm) {
  if(frm.doc.has_fine){
     frm.add_custom_button('Create Fine', () => {
        frappe.new_doc('Library Fine', {
            library_transaction: frm.doc.name
        })
    })
  }
  else {
    frm.remove_custom_button('Create Fine')
  }
}
